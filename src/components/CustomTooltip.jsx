import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { InfoOutlined, HighlightOffOutlined } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const CustomTooltip = ({ label, text }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {label}
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={text}
        >
          <IconButton
            aria-label="delete"
            size="small"
            onClick={(e) => handleTooltipOpen(e)}
          >
            {!open
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
