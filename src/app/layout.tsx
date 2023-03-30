"use client";
export const metadata = {
  title: "Psi do Futuro",
  description: "",
};
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { responsiveTheme } from "@/themes/globalStyles";
import DrawerAppBar from "@/components/navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={responsiveTheme}>
          <CssBaseline />
          <body>{children}</body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
