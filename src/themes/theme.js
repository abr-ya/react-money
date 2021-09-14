import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B3A67',
    },
    secondary: {
      main: '#496A81',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        border: '1px solid #496A81 !important',
      },
      label: {
        textShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
        fontSize: '18px',
      },
    },
  },
});

export default theme;
