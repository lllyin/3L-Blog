import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';
import MarkdownShow from '../../components/Markdown/MarkdownShow';
import { RESUME_MD_TEXT } from './resume.md';

import styles from './index.less';

export default class Resume extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1>Resume Page</h1>
          <div className={styles['project-item']}>
            <MarkdownShow
              className={styles['md-project']}
              mdString={RESUME_MD_TEXT}
            />
          </div>
        </Content>
      </section>
    );
  }
}
