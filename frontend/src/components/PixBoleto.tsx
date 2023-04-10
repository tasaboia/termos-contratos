import React, { useState } from "react";
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
import form from "../assets/form.png";
import { InputText } from "primereact/inputtext";
import ClientForm from "./ClientForm";

interface IProp {
  url: string | undefined;
}

export default function PixBoleto({ url }: IProp) {
  const [value, setValue] = useState("");

  //vai receber o nome do pdf e vai acessar via url // pdf online public do storage
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={6} lg={4} padding={2} color="white">
          <Box bgcolor="#EF7779" p={5} borderRadius={10}>
            <Typography mb={2} variant="h3">
              Comece sua jornada com a gente
            </Typography>
            <Typography variant="body1" fontFamily="sans-serif">
              Para finalizar sua compra, precisamos que você preencha um
              formulário com seus dados pessoais. Além disso, pedimos que você
              leia e concorde com nossos termos de serviço e política de
              privacidade para que possamos manter uma relação transparente e
              confiável com nossos clientes
            </Typography>
            <img
              style={{ width: 300, height: 300 }}
              src={form}
              alt="Ilustração de um formulário"
            />
          </Box>
        </Grid>

        {/* form */}
        <Grid item xs={12} md={6} lg={5} padding={2}>
          <ClientForm url={url} />
        </Grid>
      </Grid>
    </>
  );
}
