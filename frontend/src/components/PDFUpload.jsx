import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";

// ------------------ configuracao firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export default function PDFUpload() {
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, "gs://termos-contratos.appspot.com/");
  const handleFileSelect = (event) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Por favor, selecione um arquivo");
      return;
    }

    const storageRef = ref(storage, "pdfs/" + selectedFile.name);
    uploadBytes(storageRef, selectedFile).then((snapshot) => {
      console.log("Arquivo carregado com sucesso");
    });
  };
  return (
    <>
      <form onSubmit={handleUpload} method="post">
        <input type="file" name="file" onChange={handleFileSelect} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
