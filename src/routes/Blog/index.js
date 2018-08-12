import React, { Component } from 'react';
import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import { ResponsiveHeader } from '../../components/Header';
import Abstract from '../../components/Article/Abstract';
import { Content } from '../../components/Layout';
import styles from './blog.less';

@connect(({ article, loading }) => ({
  article,
  loading
}))
export default class Blog extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetch',
    })
  }

  render() {
    const { article, loading } = this.props;
    return (
      <section>
        <ResponsiveHeader />
        <Content
          className="home-box"
          style={{ marginTop: 30 }}
          loading={loading.models.article}
        >
          <h1>Blog Page</h1>
          <QueueAnim
            className="queue-simple"
            type="left"
            delay={300}
            duration={500}
            appear={true}
            leaveReverse={true}
          >
            {
              article.list.map(articleItem => <Abstract className={styles['article-item']} key={articleItem._id} data={articleItem} />)
            }
          </QueueAnim>
        </Content>
      </section>
    );
  }
}