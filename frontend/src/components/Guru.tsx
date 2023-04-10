import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import form from "../assets/form.png";
import { InputText } from "primereact/inputtext";
import Logo from "../../public/logo.png";
interface IProp {
  checkout: string | undefined;
  url: string | undefined;
}
export default function Guru({ checkout, url }: IProp) {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number>(0);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    };

    return (
      <Container maxWidth="md" sx={{ my: 2 }}>
        <div>
          <embed src={url} type="application/pdf" width="100%" height="500px" />
        </div>
      </Container>
    );
  };

  //vai receber o nome do pdf e vai acessar via url // pdf online public do storage
  return (
    <Box height="100%" bgcolor="#F3F3F3" p={{ xs: 2, lg: 0 }}>
      <Box padding={3} pt={2} width="100%">
        <img
          src={Logo}
          alt="Logo da empresa Psidofuturo"
          style={{ width: 150, height: "auto" }}
        />
      </Box>
      <Grid container sx={{ flexGrow: 1 }} justifyContent="center" spacing={2}>
        <Grid item xs={12} md={12} lg={12} justifyContent="center">
          <Typography textAlign="center" variant="h2" color="#EF7779">
            Termos de Serviço
          </Typography>
          <Box display="flex" justifyContent="center">
            <Typography
              my={2}
              textAlign="center"
              variant="body2"
              fontFamily="sans-serif"
              maxWidth={500}
            >
              Antes de prosseguir com sua compra, certifique-se de que concorda
              com nossos termos de serviço. Por favor, leia atentamente o
              acordo, pois ele contém informações importantes sobre seus
              direitos e possíveis soluções legais.
            </Typography>
          </Box>
          <PdfViewer />

          <Box display="flex" justifyContent="center" mb={10}>
            <Box
              mt={2}
              maxWidth={400}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <FormControlLabel
                color="#EF7779"
                control={
                  <Checkbox
                    style={{
                      color: "#EF7779",
                    }}
                    name="termosServico"
                    value="sim"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Eu li e concordo com os termos de serviço"
              />

              <Button
                style={{ backgroundColor: "#EF7779" }}
                disabled={!isChecked}
                variant="contained"
                href={checkout}
              >
                Finalizar Pagamento
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
