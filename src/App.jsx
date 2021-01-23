import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import styles from './app.module.scss';
import SelectWay from './components/SelectWay/SelectWay';
import NdflToggle from './components/NdflToggle';
import ThemedTextField from './components/themed/ThemedTextField';
import Result from './components/Result/Result';
import CustomSnackbarControl from './components/CustomSnackbarControl';

const App = () => {
  const [select, setSelect] = useState('mounth'); // ['mounth', 'mrot', 'perDay', 'perHour']
  const [isNdflOn, setIsNdflOn] = useState(true);
  const [perMonth, setPerMonth] = useState(0);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const ndflHadler = () => {
    setIsNdflOn((prev) => !prev);
  };

  const textChangeHandler = (e) => {
    setPerMonth(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.app}>
      <h1>App Title</h1>
      <Typography
        variant="body1"
        color="secondary"
      >
        Сумма
      </Typography>
      <SelectWay select={select} handler={handleChange} />
      <div className={styles.ndfl}>
        <NdflToggle isNdflOn={isNdflOn} ndflHadler={ndflHadler} />
      </div>
      <div className={styles.number}>
        <ThemedTextField
          onChange={textChangeHandler}
        />
        <Typography
          variant="body1"
          color="primary"
        >
          &#8381;
          {`${select === 'perDay' ? ' в день' : ''}${select === 'perHour' ? ' в час' : ''}`}
        </Typography>
      </div>
      { (select === 'mounth' && !!perMonth) && (
        <Result
          pure={isNdflOn ? perMonth : perMonth * 0.87}
          ndfl={Math.round(isNdflOn ? (perMonth / 87) * 13 : perMonth * 0.13)}
        />
      )}
      <CustomSnackbarControl />
    </div>
  );
};

export default App;
