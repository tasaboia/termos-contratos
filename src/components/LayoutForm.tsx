"use client";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { ReactNode } from "react";
import colors from "@/themes/colors";
import Image from "next/image";
import { Bree_Serif } from "@next/font/google";
import ilustracao from "../../public/imagens/ilustracao.png";
const BreeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
});
interface IForm {
  children: ReactNode;
}

export const LayoutForm = ({ children }: IForm) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
      mt={10}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={5}
          mx={{ sx: 2, lg: 5 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            background: colors.secondaryMain,
            color: "white",
            display: "flex",
            borderRadius: "20px",
            height: "85vh",
          }}
        >
          <Box padding={4}>
            <Typography
              maxWidth={400}
              color="inherit"
              sx={{
                fontSize: "40px",
                lineHeight: "40px",
                my: 1,
              }}
              fontFamily={BreeSerif.style.fontFamily}
              marginTop={{ xs: "10rem", lg: 0 }}
            >
              Comece sua jornada com a gente
            </Typography>
            <Typography
              maxWidth={400}
              align="center"
              variant="body1"
              textAlign="justify"
              color="white"
              mt={4}
            >
              Para finalizar sua compra, precisamos que você preencha um
              formulário com seus dados pessoais. Além disso, pedimos que você
              leia e concorde com nossos termos de serviço e política de
              privacidade para que possamos manter uma relação transparente e
              confiável com nossos clientes
            </Typography>
            <Image alt="" src={ilustracao} width={300} height={300} />
          </Box>
        </Grid>

        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
          }}
          padding={{ xs: 2, lg: 0 }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
