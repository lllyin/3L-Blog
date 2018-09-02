import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { ResponsiveHeader } from '../../components/Header';
import MarkdownShow from '../../components/Markdown/MarkdownShow';
import PanelTitle from '../../components/Panel/PanelTitle';
import { Content } from '../../components/Layout';
import { totop, lightbox, fixnav } from './totop.md.js';

import styles from './index.less';

export default class Project extends Component {
  render() {
    return (
      <section style={{ paddingBottom: 20 }}>
        <ResponsiveHeader />
        <Content className={styles['home-box']}>
          <h1> Project Page</h1>
          <QueueAnim
            className="queue-simple"
            delay={300}
            duration={500}
            appear
            leaveReverse
          >
            <div className={styles['project-item']}>
              <PanelTitle
                title="返回顶部"
                desc="top.js"
                extra="lyin"
              />
              <MarkdownShow
                className={styles['md-project']}
                mdString={totop}
              />
            </div>
            <div className={styles['project-item']}>
              <PanelTitle
                title="Light box效果"
                desc="lightbox.js"
                extra="lyin"
              />
              <MarkdownShow
                className={styles['md-project']}
                mdString={lightbox}
              />
            </div>
            <div className={styles['project-item']}>
              <PanelTitle
                title="随意定位导航栏"
                desc="fixnav.js"
                extra="lyin"
              />
              <MarkdownShow
                className={styles['md-project']}
                mdString={fixnav}
              />
            </div>
          </QueueAnim>
        </Content>
      </section>
    );
  }
}
