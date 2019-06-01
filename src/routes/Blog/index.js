import React, { Component } from 'react';
import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import { ResponsiveHeader } from '../../components/Header';
import Abstract from '../../components/Article/Abstract';
import { Content } from '../../components/Layout';
import LoadingList from '../../components/LoadingList';
import styles from './blog.less';

@connect(({ article, loading }) => ({
  article,
  loading,
}))
export default class Blog extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetch',
    });
  }

  // 加载下一页
  handleLoadingMore = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'article/fetch',
      loadingMore: true
    });
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
          <LoadingList onLoadingMore={this.handleLoadingMore}>
            <QueueAnim
              className="queue-simple"
              type="left"
              delay={300}
              duration={500}
              appear
              leaveReverse
            >
                {
                  article.list.map(articleItem => <Abstract className={styles['article-item']} key={articleItem._id} data={articleItem} />)
                }
            </QueueAnim>
          </LoadingList>
        </Content>
      </section>
    );
  }
}
