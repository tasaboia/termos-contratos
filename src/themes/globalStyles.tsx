import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";

import { Fira_Sans, Open_Sans } from "@next/font/google";

const FiraSans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});
const OpenSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

const bgColor = colors.grey50;

const heading = colors.grey900;
const paper = colors.paper;
const backgroundDefault = colors.paper;
const background = colors.primaryLight;
const darkTextPrimary = colors.grey700;
const darkTextSecondary = colors.grey500;
const textDark = colors.grey900;
const menuSelected = colors.secondaryDark;
const menuSelectedBack = colors.secondaryLight;
const divider = colors.grey200;

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primaryMain,
      dark: colors.primaryDark,
      200: colors.primary200,
      800: colors.primary800,
    },
    secondary: {
      light: colors.secondaryLight,
      main: colors.secondaryMain,
      dark: colors.secondaryDark,
      200: colors.secondary200,
      800: colors.secondary800,
    },
    error: {
      light: colors.errorLight,
      main: colors.errorMain,
      dark: colors.errorDark,
    },

    warning: {
      light: colors.warningLight,
      main: colors.warningMain,
      dark: colors.warningDark,
    },
    success: {
      light: colors.successLight,
      200: colors.success200,
      main: colors.successMain,
      dark: colors.successDark,
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      500: darkTextSecondary,
      600: heading,
      700: darkTextPrimary,
      900: textDark,
    },
    text: {
      primary: darkTextPrimary,
      secondary: darkTextSecondary,
    },
    background: {
      paper: paper,
      default: backgroundDefault,
    },
  },
  typography: {
    fontFamily: FiraSans.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      lineHeight: 1.1,
      letterSpacing: "-0.094rem",
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.094rem",
    },
    h3: {
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.75rem",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.313rem",
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.009em",
    },
    subtitle2: {
      fontFamily: FiraSans.style.fontFamily,
      fontWeight: 300,
      fontSize: "0.9rem",
      lineHeight: 1.5,
      letterSpacing: "0.009em",
    },
    body1: {
      fontFamily: OpenSans.style.fontFamily,
    },
    body2: {
      fontFamily: OpenSans.style.fontFamily,
      fontSize: "0.9rem",
    },
    button: {
      fontFamily: FiraSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "0.9rem",
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: OpenSans.style.fontFamily,
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: OpenSans.style.fontFamily,
      fontWeight: 300,
      fontSize: "0.6rem",
      lineHeight: 1.5,
      letterSpacing: "0.094rem",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *::-webkit-scrollbar {
          width: 10px;
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `12px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: textDark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: darkTextPrimary,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: menuSelected,
            backgroundColor: menuSelectedBack,
            "&:hover": {
              backgroundColor: menuSelectedBack,
            },
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
          "&:hover": {
            backgroundColor: menuSelectedBack,
            color: menuSelected,
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: darkTextPrimary,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: darkTextPrimary,
          "&::placeholder": {
            color: darkTextSecondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `12px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.grey500,
          },
          "&:hover $notchedOutline": {
            borderColor: colors.primaryLight,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: "15.5px 14px",
          borderRadius: `12px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `12px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: colors.grey300,
          },
        },
        mark: {
          backgroundColor: colors.paper,
          width: "4px",
        },
        valueLabel: {
          color: colors.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: colors.primaryDark,
          background: colors.primary200,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: colors.paper,
          background: colors.grey700,
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
