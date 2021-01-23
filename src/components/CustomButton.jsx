import React from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// убираю пока из-за линтера
// import snackbarShow from '../utils/snackbarShow';

const CustomButton = () => (
  <div style={{
    display: 'flex', marginTop: '20px', flexDirection: 'column', width: '300px',
  }}
  >
    <Typography
      variant="body2"
      color="secondary"
    >
      CustomButton:
    </Typography>
    <Button
      variant="outlined"
      // onClick={() => snackbarShow('This is a success message!')}
    >
      Open success snackbar (Func)
    </Button>
  </div>
);

export default CustomButton;
