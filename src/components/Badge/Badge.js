import React from 'react';
import styles from './Badge.less';

const Badge = ({ count }) => (
  <span className={styles.badge}>
    {count}
  </span>
);

export default Badge;

