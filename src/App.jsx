import React, { useState } from 'react';
import styles from './app.module.scss';
import SelectWay from './components/SelectWay/SelectWay';

const App = () => {
  const [select, setSelect] = useState('mounth');

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className={styles.app}>
      <h1>App Title</h1>
      <SelectWay select={select} handler={handleChange} />
    </div>
  );
};

export default App;
