import React, { Component, Fragment } from 'react';
import { Input, Button, message } from 'antd';
import CommentsList from './CommentsList';

import styles from './Comment.less';

const { TextArea } = Input;

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  // 处理评论内容改变
  handleCommentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
    const { onChange } = this.props;
    onChange && onChange(e.target.value);
  };

  // 处理提交评论
  handleComment = () => {
    const { onComment } = this.props;
    const { content } = this.state;
    const trimedContent = content.trim();
    if (trimedContent.trim().length <= 0) {
      this.setState(
        {
          content: trimedContent,
        },
        () => {
          message.warning('评论不能为空');
        }
      );
      return false;
    }
    onComment(content).then(() => {
      this.setState({
        content: '',
      });
    });
  };

  render() {
    const { content } = this.state;
    const {
      className = '',
      loading,
      list,
      title,
      placeholder = '请输入评论',
      autosize = { minRows: 4, maxRows: 8 },
      sendBtnText = '发布评论',
      avatar,
      onLike,
    } = this.props;
    return (
      <Fragment>
        {list && <CommentsList list={list} title="评论" onLike={onLike} />}
        <div className={`${styles.comment} ${className}`}>
          <div className="comment-header">{title ? <h2>{title}</h2> : null}</div>
          <div className="comment-box">
            <div className="comment-content">
              <div>{avatar}</div>
              <TextArea
                onChange={this.handleCommentChange}
                value={content}
                placeholder={placeholder}
                autosize={autosize}
              />
            </div>
            <div className="comment-footer">
              <Button type="primary" onClick={this.handleComment} loading={loading}>
                {sendBtnText}
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
