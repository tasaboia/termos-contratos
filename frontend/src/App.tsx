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
import NavBar from "./components/NavBar";
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
    <>
      <NavBar />
      <Box height="100vh" bgcolor="#F3F3F3">
        <Grid container p={10}>
          <Grid item xs={12} md={6} lg={6} padding={2}>
            <BlockUI blocked={false}>
              <Panel header="Armazenamento">
                <PDFUpload setUrl={setUrl} />
                <PDFList />
              </Panel>
            </BlockUI>
          </Grid>
          <Grid item xs={12} md={6} lg={6} padding={2}>
            <BlockUI blocked={false}>
              <Panel header="Criação da Página">
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
              </Panel>
            </BlockUI>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
