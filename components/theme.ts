import { createTheme } from "@mui/material/styles";
import { cyan, red } from "@mui/material/colors";

const theme: import("@mui/material").Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: cyan[100],
    },
    error: {
      main: red[300],
    },
  },
});

export default theme;
