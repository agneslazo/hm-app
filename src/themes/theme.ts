import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    hint: string;
  }
  // allow configuration using `createTheme`
  interface TextOptions {
    hint?: string;
  }

  interface TypographyVariants {
    subhead1: React.CSSProperties;
    headline5: React.CSSProperties;
    headline6: React.CSSProperties;
    displaySmall: React.CSSProperties;
    bodyMedium: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subhead1?: React.CSSProperties;
    headline5?: React.CSSProperties;
    headline6?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subhead1: true;
    headline5: true;
    headline6: true;
    displaySmall: true;
    bodyMedium: true;
  }
}

export const appTheme = createTheme({
  palette: {
    common: { black: "rgba(27, 27, 27, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(247, 253, 249, 1)",
      main: "#1C1B1E",
      dark: "rgba(18, 87, 42, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(236, 243, 252, 1)",
      main: "#6E7582",
      dark: "rgba(159, 166, 180, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    error: {
      light: "rgba(255, 215, 215, 1)",
      main: "rgba(186, 27, 27, 1)",
      dark: "rgba(65, 0, 1, 1)",
      contrastText: "#fff",
    },
    info: {
      main: "#00B0F0"
    },
    text: {
      primary: "rgba(2, 20, 52, 1)",
      secondary: "rgba(110, 117, 130, 1)",
      disabled: "rgba(237, 237, 237, 1)",
      hint: "rgba(223, 225, 225, 1)",
    },
  },
  typography: {
    subhead1: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
      display: "flex",
      alignItems: "flex-end",
    },
    headline5: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "22px",
      lineHeight: "28px",
    },
    headline6: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
      display: "flex",
      alignItems: "flex-end",
    },
    displaySmall: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "36px",
      lineHeight: "44px",
      textAlign: "center",
    },
    bodyMedium: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    button: {
      fontFamily: "Sofia Pro",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
    },
  },
});
