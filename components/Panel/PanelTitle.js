import React from 'react';

import styles from './PanelTitle.less';

const PanelTitle = ({ title, desc, extra }) => (
  <div className={styles['panel-title']}>
    <div className="cata-title">
      <h3 className="title-solid-blue title">
        {title}
        <small className="desc">{desc}</small>
      </h3>
    </div>
    <div className="author">
      by<a href="http://weibo.com/u/2811978982" className="name">{extra}</a>
    </div>
  </div>
);

export default PanelTitle;
