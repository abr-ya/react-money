import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { showAlert } from '../actions/alertActions';

const CustomSnackbarControl = () => {
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex', marginTop: '20px', flexDirection: 'column', width: '300px',
    }}
    >
      <Typography
        variant="body2"
        color="secondary"
      >
        CustomSnackbarControl:
      </Typography>
      <Button variant="outlined" onClick={() => dispatch(showAlert('This is a success message!'))}>
        Open success snackbar
      </Button>
      <Button variant="outlined" onClick={() => dispatch(showAlert('This is a error message!', 'error'))}>
        Open error snackbar
      </Button>
    </div>
  );
};

export default CustomSnackbarControl;
