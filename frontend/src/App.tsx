import React, { useEffect, useState } from "react";
import axios from "axios";
import http from "./api/http";

import { ListBox } from "primereact/listbox";
import PDFList from "./components/PDFList";
import PDFSelect from "./components/PDFSelect";
import { InputText } from "primereact/inputtext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PDFUpload from "./components/PDFUpload";
import CheckoutLink from "./components/CheckoutLink";
import ProductName from "./components/ProductName";
import CPFType from "./components/CPFType";

function App() {
  const [type, setType] = useState("");
  const [pdf, setPDF] = useState("");
  const [checkout, setCheckout] = useState("");
  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => console.log("Texto copiado com sucesso!"))
      .catch((err) => console.error("Erro ao copiar texto: ", err));
  };
  return (
    <Box padding={2} height="100vh" bgcolor="#F3F3F3">
      <Typography padding={2} variant="h1" color="#EF7779">
        Gerenciador de termos <br /> para{" "}
        <span style={{ fontStyle: "italic" }}>produtos</span>
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6} lg={6} padding={2}>
          <PDFUpload />
          <PDFList />
        </Grid>
        <Grid item xs={12} md={6} lg={6} padding={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <CPFType setType={setType} />
            <PDFSelect setPDF={setPDF} pdf={pdf} />
            <CheckoutLink checkout={checkout} setCheckout={setCheckout} />
            <ProductName product={product} setProduct={setProduct} />

            <Box mt={2}>
              <Button
                disabled={!type || !pdf || !checkout || !product}
                variant="contained"
                onClick={() =>
                  setLink(
                    `http://localhost:5173/Contrato/${type}/${pdf}/${checkout}/${product}`
                  )
                }
              >
                Gerar Link
              </Button>
            </Box>
            <Box
              mt={2}
              borderRadius={"5px"}
              border="1px solid #ccc"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography mx={2}>
                {link ? link : "Link para o cliente"}
              </Typography>
              <IconButton onClick={handleCopyClick}>
                <ContentCopyIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
