/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackbar = ({ hideAlert, alert }) => (
  <div style={{ display: 'flex', marginTop: '20px' }}>
    <Snackbar open={alert.display} autoHideDuration={3000} onClose={() => hideAlert()}>
      <Alert onClose={() => hideAlert()} severity={alert.type}>
        {alert.text}
      </Alert>
    </Snackbar>
  </div>
);

export default CustomSnackbar;

CustomSnackbar.propTypes = {
  hideAlert: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  alert: PropTypes.object.isRequired,
};
