import React, { Component } from 'react';
import qs from 'qs';
import { connect } from 'dva';
import { ResponsiveHeader } from '../../components/Header';
import Article from '../../components/Article';
import { Content } from '../../components/Layout';
import { Comment } from '../../components/Comment';
import styles from './blogDetail.less';

@connect(({ article, loading }) => ({
  article,
  loading,
}))
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      args: qs.parse(props.location.search, { ignoreQueryPrefix: true }),
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { args } = this.state;
    dispatch({
      type: 'article/fetch',
    });
    dispatch({
      type: 'article/fetchDetail',
      articleId: args.id,
    });
  }

  // 处理评论提交
  handleComment = (content) => {
    const { article, dispatch } = this.props;
    console.log('提交评论', content, article.detail);
    if (!article.detail._id) {
      return;
    }
    return dispatch({
      type: 'article/addComment',
      postId: article.detail._id,
      data: {
        from: '',
        to: '',
        content,
      },
    });
  };

  render() {
    const { article, loading } = this.props;
    return (
      <section>
        <ResponsiveHeader />
        <Content
          className={`home-box ${styles['blog-detail']}`}
          style={{ marginTop: 30 }}
          loading={loading.models.article}
        >
          <Article data={article.detail} {...this.props} />
          <Comment
            list={article.detail.comments}
            onComment={this.handleComment}
            loading={loading.effects['article/addComment']}
          />
        </Content>
      </section>
    );
  }
}
