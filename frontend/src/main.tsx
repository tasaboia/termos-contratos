import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { PsiTheme } from "./theme/theme";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import Guru from "./components/Guru";
import PixBoleto from "./components/PixBoleto";
const responsiveTheme = responsiveFontSizes(PsiTheme);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
      <RouterProvider router={router} />

      {/* <PixBoleto /> */}
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
