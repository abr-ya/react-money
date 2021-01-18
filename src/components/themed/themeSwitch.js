import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiSwitch: {
      root: {
        width: '34px',
        height: '18px',
        padding: 0,
        margin: '0 15px',
      },
      switchBase: {
        color: '#eee',
        '&$checked': {
          color: '#eee', // включено
          transform: 'translateX(16px)',
        },
        padding: 0,
      },
      thumb: {
        width: '16px',
        height: '16px',
        margin: '1px',
      },
      track: {
        opacity: 1,
        backgroundColor: 'gainsboro',
        '$checked + &': {
          opacity: 1,
          backgroundColor: 'orange',
        },
        height: '100%',
        padding: 0,
        borderRadius: '10px',
      },
    },
  },
});

export default theme;
