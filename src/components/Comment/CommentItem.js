import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import momentAgo from 'moment-ago';

import styles from './CommentItem.less';

const jss = themes => ({
    poster: {
      color: themes.palette.primary.main,
      justifyContent: 'flex-start'
    },
    likeBtn: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  });

const CommentItem = ({ data, classes, className = '', onLike }) => (
  <li className={`${styles['comment-item']} ${className}`}>
    <div className="comment-item-meta">
      <span className="name">
        {data.from ? (
          data.from
        ) : (
          <Tooltip placement="right" title=" 来无影，去无踪。该位大佬虽留言，但未留下任何个人信息。">
            <Button className={classes.poster}>佚名</Button>
          </Tooltip>
        )}
      </span>
      <span className="date">{momentAgo(data.create_time).ago()}</span>
    </div>
    <div className="comment-item-content">{data.content}</div>
    <div className="comment-item-footer">
      <span
        className={classNames('like-btn', classes.likeBtn)}
        onClick={() => {
          onLike(data);
        }}
      >
        <ThumbUpIcon fontSize="small">{data.like}</ThumbUpIcon>
        {data.like}
      </span>
    </div>
  </li>
);

CommentItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(jss)(CommentItem);
