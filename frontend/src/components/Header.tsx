import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../public/logo.png";

export default function Header() {
  return (
    <div>
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
    </div>
  );
}
