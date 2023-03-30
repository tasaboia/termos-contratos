"use client";
import * as React from "react";
import { AppBar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Logo from "../../../public/imagens/logo.png";
import Link from "next/link";

export default function DrawerAppBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src={Logo.src} width="166" height="38" alt="logo" />
          </Typography>
          <Box>
            <Button color="secondary" href="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
