import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import axios from "axios";
export default function PDFUpload() {
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Por favor, selecione um arquivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await axios.post(
      "http://localhost:3000/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);
  };

  return (
    <FileUpload
      name="file"
      url={"http://localhost:3000/api/upload"}
      multiple
      accept="file/*"
      maxFileSize={5000000}
      chooseLabel="Escolher Arquivo"
      uploadLabel="Subir Arquivo"
      cancelLabel="Cancelar"
      emptyTemplate={
        <p className="m-0">
          Arraste e solte os arquivos aqui para fazer o upload.
        </p>
      }
    />
  );
}
