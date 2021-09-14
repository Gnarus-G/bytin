import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, red} from '@material-ui/core/colors';

// Create a theme instance.
const theme: import('@material-ui/core').Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9"
    },
    secondary: {
      main: cyan[100]
    },
    error: {
      main: red[300],
    },
  },
});

export default theme
