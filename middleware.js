const busboy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");

exports.filesUpload = function (req, res, next) {
  // See https://cloud.google.com/functions/docs/writing/http#multipart_data

  const bb = busboy({
    headers: req.headers,
    limits: {
      // Cloud functions impose this restriction anyway
      fileSize: 10 * 1024 * 1024,
    },
  });

  const fields = {};
  const files = [];
  const fileWrites = [];
  // Note: os.tmpdir() points to an in-memory file system on GCF
  // Thus, any files in it must fit in the instance's memory.
  const tmpdir = os.tmpdir();

  bb.on("field", (key, value) => {
    // You could do additional deserialization logic here, values will just be
    // strings
    fields[key] = value;
  });

  bb.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const filepath = path.join(tmpdir, filename);
    console.log(
      `Handling file upload field ${fieldname}: ${filename} (${filepath})`
    );
    const writeStream = fs.createWriteStream(filepath);
    file.pipe(writeStream);

    fileWrites.push(
      new Promise((resolve, reject) => {
        file.on("end", () => writeStream.end());
        writeStream.on("finish", () => {
          fs.readFile(filepath, (err, buffer) => {
            const size = Buffer.byteLength(buffer);
            console.log(`${filename} is ${size} bytes`);
            if (err) {
              return reject(err);
            }

            files.push({
              fieldname,
              originalname: filename,
              encoding,
              mimetype,
              buffer,
              size,
            });

            try {
              fs.unlinkSync(filepath);
            } catch (error) {
              return reject(error);
            }

            resolve();
          });
        });
        writeStream.on("error", reject);
      })
    );
  });

  bb.on("finish", () => {
    Promise.all(fileWrites)
      .then(() => {
        req.body = fields;
        req.files = files;
        next();
      })
      .catch(next);
  });

  bb.end(req.rawBody);
};
