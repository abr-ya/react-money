import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#ccc',
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        padding: '5px',
      },
    },
  },
});

export default theme;
