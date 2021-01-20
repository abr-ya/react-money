import React from 'react';
import PropTypes from 'prop-types';
import styles from './result.module.scss';

const Result = ({ pure, ndfl }) => (
  <div className={styles.result}>
    <p>
      <span className={styles.number}>{pure.toLocaleString('ru')}</span>
      &nbsp;сотрудник будет получать на руки
    </p>
    <p>
      <span className={styles.number}>{ndfl.toLocaleString('ru')}</span>
      &nbsp;НДФЛ, 13% оклада
    </p>
    <p>
      <span className={styles.number}>{(pure + ndfl).toLocaleString('ru')}</span>
      &nbsp;за сотрудника в месяц
    </p>
  </div>
);

export default Result;

Result.propTypes = {
  pure: PropTypes.number.isRequired,
  ndfl: PropTypes.number.isRequired,
};
