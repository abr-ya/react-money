import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ThemedSwitch from './themed/ThemedSwitch';

const NdflToggle = ({ isNdflOn, ndflHadler }) => (
  <div style={{ display: 'flex' }}>
    <Typography
      variant="body2"
      color="secondary"
    >
      Указать с НДФЛ
    </Typography>
    <ThemedSwitch
      checked={isNdflOn}
      onChange={ndflHadler}
      name="ndfl"
      color="default"
    />
    <Typography
      variant="body2"
      color="primary"
    >
      Без НДФЛ
    </Typography>
  </div>
);

export default NdflToggle;

NdflToggle.propTypes = {
  isNdflOn: PropTypes.bool.isRequired,
  ndflHadler: PropTypes.func.isRequired,
};
