const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const { getStorage } = require("firebase-admin/storage");
const bodyParser = require("body-parser");

const multer = require("multer");

const key = require("./key.json");

const app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.text({ type: "/" }));
app.use(bodyParser.json()); // analisar solicitações JSON
app.use(bodyParser.urlencoded({ extended: true })); // analisar solicitações de formulário

app.use(express.json());

// ---------------- LOGIN
admin.initializeApp({
  credential: admin.credential.cert(key),
  storageBucket: "termos-contratos.appspot.com",
});

const bucket = getStorage().bucket();

// ------------- funcao para arquivo

// Configura o multer para processar uploads de arquivos
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      cb(new Error("Arquivo inválido"));
    } else {
      cb(null, true);
    }
  },
});

app.get("/pdfList", async (req, res) => {
  try {
    const [files] = await bucket.getFiles({ directory: "pdfs" });
    const pdfs = files
      .filter((file) => file.name.endsWith(".pdf"))
      .map((file) => ({ name: file.name.replace("pdfs/", "") }));
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ pdfs });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao contar PDFs", error: error });
  }
});

app.delete("/pdfDelete/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const file = bucket.file(`pdfs/${name}`);
    await file.delete();
    res.status(200).json({ message: `Arquivo ${name} deletado com sucesso` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Erro ao deletar arquivo", error: error });
  }
});

app.post("/pdfUpload", upload.single("file"), async (req, res) => {
  try {
    // Obtém o arquivo PDF enviado no corpo da requisição
    const file = req.file;
    console.log("Entrou: ->>>> ", req.fileName);
    console.log("file: ->>>> ", file);

    res.status(200).send({ menssage: " you did" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao realizar upload do arquivo");
  }
});

exports.api = functions.https.onRequest(app);
// try {

//   const file = req.file; // assume que o arquivo é passado no corpo da requisição em um campo chamado "file"
//   const fileRef = bucket.file(`pdfs/${file.name}`); // cria uma referência ao arquivo no Firebase Storage
//   await fileRef.save(file.data, { contentType: "application/pdf" }); // salva o arquivo no Firebase Storage com o tipo de conteúdo definido como "application/pdf"
//   res.status(200).send("Arquivo enviado com sucesso.");
// } catch (error) {
//   console.error(error);
//   res.status(500).send("Erro ao fazer upload do arquivo.");
// }
