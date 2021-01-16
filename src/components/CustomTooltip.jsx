import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { InfoOutlined, HighlightOffOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(() => ({
  customTooltip: {
    fontSize: 11,
    fontWeight: 700,
    width: 190,
    marginLeft: '13px',
    backgroundColor: 'violet',
    borderRadius: 0,
  },
  arrow: {
    fontSize: 22,
    marginLeft: '-1px !important',
    '&::before': {
      backgroundColor: 'violet',
      position: 'absolute',
      marginLeft: '-1px',
      left: '-10px',
    },
  },
}));

const CustomTooltip = ({ label, text }) => {
  const [soft, setSoft] = useState(false);
  const [hard, setHard] = useState(false);
  const [softBlock, setSoftBlock] = useState(false);
  const classes = useStyles();

  const handleTooltipClose = () => {
    setHard(false);
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    if (!hard) setSoftBlock(true);
    setHard((prev) => !prev);
  };

  const handleHover = (e) => {
    e.preventDefault();
    if (!softBlock) setSoft(true);
  };

  const handleOut = (e) => {
    e.preventDefault();
    setSoft(false);
    if (!hard) setSoftBlock(false);
  };

  return (
    <div>
      {label}
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          classes={{
            tooltip: classes.customTooltip,
            arrow: classes.arrow,
          }}
          placement="bottom-start"
          arrow
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={soft || hard}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={text}
        >
          <IconButton
            aria-label="delete"
            size="small"
            onClick={(e) => handleIconClick(e)}
            onMouseOver={(e) => handleHover(e)}
            onMouseOut={(e) => handleOut(e)}
          >
            {!hard
              ? <InfoOutlined fontSize="inherit" />
              : <HighlightOffOutlined fontSize="inherit" />}
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
};

export default CustomTooltip;

CustomTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
