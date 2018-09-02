import React from 'react';
import { Spin } from 'antd';
import styles from './Content.less';

const Content = ({ children, className, loading = false, ...rest }) => {
  return (
    <Spin spinning={loading}>
      <div className={`${styles.content} ${className}`} {...rest}>
        {children}
      </div>
    </Spin>

  );
};


export default Content;
