import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeTextField';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator=" "
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const ThemedTextField = (props) => (
  <ThemeProvider theme={theme}>
    <TextField
      // value={values.numberformat}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </ThemeProvider>
);

export default ThemedTextField;
