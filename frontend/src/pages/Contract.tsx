import { Typography } from "@mui/material";
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Guru from "../components/Guru";
import PixBoleto from "../components/PixBoleto";
import { useLocation } from "react-router-dom";

export default function Contract() {
  let { type, pdf, product } = useParams();
  const location = useLocation();
  const checkout = new URLSearchParams(location.search).get("link");

  const PDFurl = `https://firebasestorage.googleapis.com/v0/b/termos-contratos.appspot.com/o/pdfs%2F${pdf}?alt=media&token=f6997c23-aa5b-407b-90e6-5c8b40013370`;
  return (
    <>
      {type === "pix-boleto" ? (
        <PixBoleto url={PDFurl} />
      ) : (
        <Guru checkout={checkout} url={PDFurl} />
      )}
    </>
  );
}
