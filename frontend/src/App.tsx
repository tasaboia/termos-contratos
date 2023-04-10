import { useState } from "react";
import PDFList from "./components/PDFList";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import PDFUpload from "./components/PDFUpload";
import Logo from "../public/logo.png";
import LinkStepper from "./components/LinkStepper";

function App() {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => console.log("Texto copiado com sucesso!"))
      .catch((err) => console.error("Erro ao copiar texto: ", err));
  };

  return (
    <Box height="100%" bgcolor="#F3F3F3">
      {/* ------------------------  header ------------------------  */}
      <Box pl={4} pt={2} display="flex" flexDirection="column" maxWidth={330}>
        <img
          src={Logo}
          alt="Logo da empresa Psidofuturo"
          style={{ width: 300, height: "auto" }}
        />
        <Typography alignSelf="flex-end" color={"#EF7779"}>
          Gerenciador de páginas
        </Typography>
      </Box>

      <Grid container minHeight="75vh">
        {/* ------------------------  Panel left ------------------------  */}
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

        <Grid item xs={12} md={6} lg={6} padding={2} minHeight="100%">
          <Box
            bgcolor="white"
            padding={4}
            borderRadius={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
            minHeight="100%"
          >
            <LinkStepper setLink={setLink} />

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
                padding={1}
              >
                <Typography my={1}>
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
