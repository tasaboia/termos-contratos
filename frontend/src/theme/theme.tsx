import { createTheme } from "@mui/material";

export const PsiTheme = createTheme({
  typography: {
    fontFamily: "Bree, Roboto",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
        },
          @font-face {
            font-family: 'Bree';
            src: url('../../fonts/Bree/Bree-Regular.woff') format('truetype');
            font-weight: normal;
            font-style: normal;
          },
          *::-webkit-scrollbar {
            width: 5px;
          }
          
          *::-webkit-scrollbar-track {
            background: gb(255, 255, 255);
          }
          
          *::-webkit-scrollbar-thumb {
            background-color: rgb(183, 183, 183);
            border-radius: 20px;
            border: 3px solid gb(255, 255, 255);
          }
  
        `,
    },
    MuiAppBar: {
      defaultProps: {
        color: "secondary",
        position: "static",
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: 0,
        },
      },
    },
  },
});
