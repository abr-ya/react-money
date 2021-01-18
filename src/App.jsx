import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import styles from './app.module.scss';
import SelectWay from './components/SelectWay/SelectWay';
import NdflToggle from './components/NdflToggle';

const App = () => {
  const [select, setSelect] = useState('mounth');
  const [isNdflOn, setIsNdflOn] = useState(true);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const ndflHadler = () => {
    setIsNdflOn((prev) => !prev);
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
      <NdflToggle isNdflOn={isNdflOn} ndflHadler={ndflHadler} />
    </div>
  );
};

export default App;
