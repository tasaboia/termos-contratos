import React, { useEffect, useState } from "react";
import axios from "axios";
import http from "./api/http";

import { ListBox } from "primereact/listbox";
import PDFList from "./components/PDFList";
import PDFSelect from "./components/PDFSelect";
import { InputText } from "primereact/inputtext";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PDFUpload from "./components/PDFUpload";
import CheckoutLink from "./components/CheckoutLink";
import ProductName from "./components/ProductName";
import CPFType from "./components/CPFType";
import { BlockUI } from "primereact/blockui";
import { Panel } from "primereact/panel";
import Logo from "../public/logo.png";

function App() {
  const [type, setType] = useState("");
  const [pdf, setPDF] = useState("");
  const [checkout, setCheckout] = useState("guru");
  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [urlEncoded, setUrlEncoded] = useState("");

  const baseURL =
    "https://us-central1-termos-contratos.cloudfunctions.net/api/";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => console.log("Texto copiado com sucesso!"))
      .catch((err) => console.error("Erro ao copiar texto: ", err));
  };

  useEffect(() => {
    const urlEncoded = encodeURIComponent(checkout);
    setUrlEncoded(urlEncoded);
    console.log(urlEncoded);
  }, [checkout]);

  return (
    <Box height="100vh" bgcolor="#F3F3F3">
      {/* ------------------------  header ------------------------  */}
      <Box pl={4} pt={5} display="flex" flexDirection="column" maxWidth={330}>
        <img
          src={Logo}
          alt="Logo da empresa Psidofuturo"
          style={{ width: 300, height: "auto" }}
        />
        <Typography alignSelf="flex-end">Gerenciador de páginas</Typography>
      </Box>
      {/* ------------------------  Panel left ------------------------  */}
      <Grid container minHeight="80vh">
        <Grid item xs={12} md={6} lg={6} padding={2} minHeight="100%">
          <Box
            bgcolor="white"
            padding={4}
            borderRadius={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
            minHeight="100%"
          >
            <Typography mb={2}>Armazenamento de arquivos</Typography>
            <PDFUpload setUrl={setUrl} />
            <Typography my={2}>
              Lista de Termos&Contratos armazenados
            </Typography>
            <PDFList />
          </Box>
        </Grid>
        {/* ------------------------  Panel Right ------------------------  */}

        <Grid item xs={12} md={6} lg={6} padding={2}>
          <Box
            bgcolor="white"
            padding={4}
            borderRadius={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
            minHeight="100%"
          >
            <Typography mb={2}>Armazenamento de arquivos</Typography>
            <CPFType setType={setType} />
            <PDFSelect setPDF={setPDF} pdf={pdf} />
            <CheckoutLink checkout={checkout} setCheckout={setCheckout} />
            <ProductName product={product} setProduct={setProduct} />

            <Box mt={2} width="100%" justifyContent="center" display="flex">
              <Button
                // disabled={!type || !pdf || !checkout || !product}
                variant="contained"
                style={{ minWidth: "200px", backgroundColor: "#EF7779" }}
                onClick={() => {
                  const link = `https://termos-contratos.web.app/Contrato/${type}/${pdf}/${product}?link=${urlEncoded}`;
                  setLink(link);
                }}
              >
                Gerar Link
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Box
                mt={2}
                borderRadius={"5px"}
                border="1px solid #ccc"
                overflow="hidden"
                minWidth={"90%"}
                height={50}
              >
                <Typography mx={2}>
                  {link ? link : "Link para o cliente"}
                </Typography>
              </Box>
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
