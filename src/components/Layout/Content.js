import React from 'react';
import styles from './Content.less';

const Content = ({ children, className, ...rest }) => {
  console.log('content layout', children, rest);
  return (
    <div className={`${styles.content} ${className}`} {...rest}>
      {children}
    </div>
  );
};


export default Content;
