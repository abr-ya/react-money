import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        width: '140px',
        height: '28px',
        border: '1px solid gainsboro',
        borderRadius: '15px',
        padding: '0 12px',
        fontWeight: '700',

        '&::before': {
          borderBottom: 'none !important',
        },
      },
      underline: {
        '&::after': {
          borderBottom: 'none !important',
        },
      },
    },
  },
});

export default theme;
