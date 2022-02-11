import { ThemeOptions } from "@mui/material/styles";
import { TMUIRichTextEditorStyles } from "mui-rte";

const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#bf539b",
    },
    secondary: {
      main: "#95bf84",
    },
  },
  typography: {
    fontFamily: '"RobotoMono", "Helvetica", "Arial", sans-serif',
    h3: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "3rem",
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  },
};

const muiRteTheme: TMUIRichTextEditorStyles = {
  overrides: {
    MUIRichTextEditor: {
      root: {
        backgroundColor: "#ffffff",
        borderRadius: "8px",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid lightgray",
        borderRadius: 8,
      },
      editor: {
        backgroundColor: "#ffffff",
        padding: "20px",
        height: "200px",
        maxHeight: "200px",
        overflow: "auto",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      },
      toolbar: {
        backgroundColor: "#ffffff",
        borderRadius: "8px",
      },
      placeHolder: {
        backgroundColor: "#ffffff",
        padding: 20,
        width: "inherit",
      },
      anchorLink: {
        color: "#333333",
        textDecoration: "underline",
      },
    },
  },
};

export const themeOptions = Object.assign(baseThemeOptions, muiRteTheme);
