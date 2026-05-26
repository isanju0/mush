import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#5e8f52",
  //     light: "#8fb886",
  //     dark: "#3f6c35",
  //   },
  //   secondary: {
  //     main: "#6f7a71",
  //   },
  //   background: {
  //     default: "#f6faf4",
  //     paper: "#ffffff",
  //   },
  //   text: {
  //     primary: "#1f2a1f",
  //     secondary: "#5c685d",
  //   },
  // },

  palette: {
    primary: {
      main: "#8B6B4A", // warm earthy brown
      light: "#C2A878", // soft hazel
      dark: "#5F4630", // deep brown
    },

    secondary: {
      main: "#6F8FAF", // muted herbal blue
      light: "#d6e8f8",
      dark: "#4F6D89",
    },

    background: {
      default: "#F7F3EE", // organic cream
      paper: "#FFFDFC",
    },

    text: {
      primary: "#3E3126", // deep cocoa
      secondary: "#6E6257", // muted brown-gray
    },

    divider: "#D8C7B0",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shadows: [
    "none",
    "0 2px 8px rgba(58, 90, 64, 0.08)",
    "0 6px 18px rgba(58, 90, 64, 0.10)",
    "0 8px 24px rgba(58, 90, 64, 0.12)",
    ...Array(21).fill("0 12px 28px rgba(58, 90, 64, 0.14)"),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});
