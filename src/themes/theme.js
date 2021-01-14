import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cccccc',
    },
    secondary: {
      main: '#000000',
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
