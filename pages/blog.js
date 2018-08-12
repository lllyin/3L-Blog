import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
// import { ResponsiveHeader } from '../src/components/Header';
import Abstract from '../components/Article/Abstract';
import { Content } from '../components/Layout';
import WithDva from '../utils/store';
import styles from './blog.less';

@WithDva(({ article, loading }) => ({
  article,
  loading
}))
export default class Blog extends Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store,
    } = props;
    await props.store.dispatch({
      type: 'article/fetch',
    })
    return {
      // dont use store as property name, it will confilct with initial store
      pathname, query, isServer, dvaStore: store,
    };
  }
  componentDidMount() {
    console.log('客户端组件渲染好了');
  }

  render() {
    const { article, loading } = this.props;
    return (
      <section>
        {/* <ResponsiveHeader /> */}
        <Content
          className="home-box"
          style={{ marginTop: 30 }}
          // loading={loading.models.article}
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