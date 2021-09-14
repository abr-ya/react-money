import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonPrim = ({ text, handler, isAdditional }) => (
  <Button
    variant={isAdditional ? 'contained' : 'outlined'}
    color="primary"
    onClick={handler}
  >
    {text}
  </Button>
);

ButtonPrim.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  isAdditional: PropTypes.bool.isRequired,
};

export default ButtonPrim;
