import { Typography } from "@mui/material";
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
export default function Contract() {
  let { type, pdf, checkout, product } = useParams();

  return (
    <div>
      <Typography>{type}</Typography>
      <Typography>{pdf}</Typography>
      <Typography>{checkout}</Typography>
      <Typography>{product}</Typography>
    </div>
  );
}
