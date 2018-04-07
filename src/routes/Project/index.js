import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import MarkdownShow from '../../components/Markdown/MarkdownShow';
import PanelTitle from '../../components/Panel/PanelTitle';
import { Content } from '../../components/Layout';
import { md } from './test.txt.js';

import styles from './index.less';

export default class Project extends Component {
  render() {
    console.log(md);
    return (
      <section style={{ paddingBottom: 20 }}>
        <ResponsiveHeader />
        <Content className={styles['home-box']}>
          <h1> Project Page </h1>
          <div className={styles['project-item']}>
            <PanelTitle
              title="返回顶部"
              desc="top.js"
              extra="lyin"
            />
            <MarkdownShow
              className={styles['md-project']}
              mdString={md}
            />
          </div>
          <div className={styles['project-item']}>
            <PanelTitle
              title="返回顶部"
              desc="top.js"
              extra="lyin"
            />
            <MarkdownShow
              className={styles['md-project']}
              mdString={md}
            />
          </div>
          <div className={styles['project-item']}>
            <PanelTitle
              title="返回顶部"
              desc="top.js"
              extra="lyin"
            />
            <MarkdownShow
              className={styles['md-project']}
              mdString={md}
            />
          </div>
        </Content>
      </section>
    );
  }
}
