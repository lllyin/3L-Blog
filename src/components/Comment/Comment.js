import React, { Component, Fragment } from "react";
import { message } from "antd";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import CommentsList from "./CommentsList";
import CommentBox from './CommentBox'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  // 处理评论内容改变
  handleCommentChange = e => {
    this.setState({
      content: e.target.value
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
          content: trimedContent
        },
        () => {
          message.warning("评论不能为空");
        }
      );
      return false;
    }
    const promiseRes = onComment(content);

    promiseRes && promiseRes.then(() => {
      this.setState({
        content: ""
      });
    });
  };

  render() {
    const { content } = this.state;
    const { 
      classes,
      className = "", 
      loading, 
      list, 
      title, 
      placeholder = "请输入评论",  
      sendBtnText = "发布评论", 
      avatar, 
      onLike 
    } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: loading,
    });
    
    return (
      <Fragment>
        {list && <CommentsList list={list} title="评论" onLike={onLike} />}
        <div className={`${styles.comment} ${className}`}>
          <div className="comment-header">{title ? <h2>{title}</h2> : null}</div>
          <div className="comment-box">
            <div className="comment-content">
              <div>{avatar}</div>
              <CommentBox
                onChange={this.handleCommentChange}
                value={content}
                rowsMax={8}
                placeholder={placeholder} 
              />
            </div>
            <div className={classes.wrapper}>
              <Button 
                variant="contained"
                color="primary"
                onClick={this.handleComment} 
                disabled={loading}
                className={buttonClassname}
              >
                {sendBtnText}
              </Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Comment);