import React, { Component } from "react";
import qs from "qs";
import { Modal } from "antd";
import { connect } from "dva";
import { ResponsiveHeader } from "../../components/Header";
import Article from "../../components/Article";
import { Content } from "../../components/Layout";
import { Comment } from "../../components/Comment";
import { jumpToLogin } from "../../services/api";
import styles from "./blogDetail.less";

@connect(({ article, user, loading }) => ({
  article,
  user,
  loading
}))
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      args: qs.parse(props.location.search, { ignoreQueryPrefix: true })
    };
  }

  showConfirm = () => {
    Modal.confirm({
      title: "登录后方可评论",
      content: "我们一起去登录好吗，不需要手机，只需要填个昵称和密码就好了，大佬 ^_^",
      okText: "走!去登录",
      cancelText: "再等会",
      onOk() {
        jumpToLogin();
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { args } = this.state;
    dispatch({
      type: "article/fetch"
    });
    dispatch({
      type: "article/fetchDetail",
      articleId: args.id
    });
  }

  // 处理评论提交
  handleComment = content => {
    const {
      article,
      user: { userInfo },
      dispatch
    } = this.props;
    console.log("提交评论", content, article.detail);
    if (!article.detail._id) {
      return;
    }
    if (!userInfo || !userInfo.name) {
      this.showConfirm();
      return false;
    }
    return dispatch({
      type: "article/addComment",
      postId: article.detail._id,
      data: {
        from: userInfo.name,
        to: "",
        content
      }
    });
  };

  // 处理点赞
  handleLike = commentObj => {
    const { dispatch } = this.props;
    return dispatch({
      type: "article/likeAComment",
      commentId: commentObj._id
    });
  };

  render() {
    const { article, loading } = this.props;
    return (
      <section>
        <ResponsiveHeader />
        <Content className={`home-box ${styles["blog-detail"]}`} style={{ marginTop: 30 }} loading={loading.models.article}>
          <Article data={article.detail} {...this.props} />
          <Comment list={article.detail.comments} onComment={this.handleComment} onLike={this.handleLike} loading={loading.effects["article/addComment"]} />
        </Content>
      </section>
    );
  }
}
