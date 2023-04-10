import { Typography } from "@mui/material";
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Guru from "../components/Guru";
import PixBoleto from "../components/PixBoleto";

export default function Contract() {
  let { type, pdf, checkout, product } = useParams();

  const PDFurl = `https://firebasestorage.googleapis.com/v0/b/termos-contratos.appspot.com/o/pdfs%2F${pdf}?alt=media&token=f6997c23-aa5b-407b-90e6-5c8b40013370`;
  console.log("type: ", type);
  console.log("pdf: ", pdf);
  console.log(">> checkout: ", checkout);
  console.log("product: ", product);

  return (
    <>
      {type === "guru" && <Guru />}
      {type === "pix-boleto" && <PixBoleto url={PDFurl} />}
    </>
  );
}
