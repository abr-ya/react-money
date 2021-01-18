import React from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeSwitch';

const ThemedSwitch = (props) => (
  <ThemeProvider theme={theme}>
    <Switch
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </ThemeProvider>
);

export default ThemedSwitch;
