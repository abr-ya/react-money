import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import StyledFormControlLabel from '../styled/StyledFormControlLabel';
import StyledRadio from '../styled/StyledRadio';
import CustomTooltip from '../CustomTooltip';
import styles from './select.module.scss';

const SelectWay = ({ select, handler }) => {
  const [tooltipText] = useState(
    'МРОТ - минимальный размер оплаты труда. Разный для разных регионов',
  );

  return (
    <FormControl component="fieldset" className={styles.select}>
      <FormLabel component="legend">Сумма</FormLabel>
      <RadioGroup aria-label="sum" name="sum" value={select} onChange={handler}>
        <StyledFormControlLabel value="mounth" control={<StyledRadio />} label="Оклад за месяц" />
        <StyledFormControlLabel
          value="mrot"
          control={<StyledRadio />}
          label={
            <CustomTooltip label="МРОТ" text={tooltipText} />
          }
        />
        <StyledFormControlLabel value="perDay" control={<StyledRadio />} label="Оплата за день" />
        <StyledFormControlLabel value="perHour" control={<StyledRadio />} label="Оплата за час" />
      </RadioGroup>
    </FormControl>
  );
};

export default SelectWay;

SelectWay.propTypes = {
  select: PropTypes.oneOf(['mounth', 'mrot', 'perDay', 'perHour']).isRequired,
  handler: PropTypes.func.isRequired,
};
