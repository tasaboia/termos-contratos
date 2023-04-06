const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
const uploadDir = path.join(__dirname, "../frontend/public/termos");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

app.use(express.static("public"));

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "Arquivo não encontrado" });
    return;
  }

  res.status(200).json({ message: "Arquivo enviado com sucesso!" });
});

app.get("/api/fileList", (req, res) => {
  fs.readdir(uploadDir, (err, arquivos) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao listar arquivos");
      return;
    }

    res.json(arquivos);
  });
});

app.delete("/api/deleteFile/:nomeArquivo", (req, res) => {
  const nomeArquivo = req.params.nomeArquivo;
  const nomeSemExtensao = nomeArquivo.replace(".pdf", "");
  const caminhoArquivo = path.join(uploadDir, nomeArquivo);

  fs.unlink(caminhoArquivo, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao excluir arquivo");
      return;
    }

    res.status(200).send("Arquivo excluído com sucesso");
  });
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
