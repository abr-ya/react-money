import React from 'react';
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    backgroundColor: 'white',
    border: '1px solid grey',
  },
  checkedIcon: {
    backgroundColor: 'white',
    '&:before': {
      display: 'block',
      width: 10,
      height: 10,
      margin: 3,
      backgroundColor: 'black',
      borderRadius: '50%',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'gainsboro',
    },
  },
});

const StyledRadio = (props) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export default StyledRadio;
