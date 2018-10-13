import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

import styles from './CommentsList.less';

export default class CommentsList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  render() {
    const { title = '评论', list = [], className = '' } = this.props;
    return (
      <div className={`${styles['comments-list']} ${className}`}>
        <div className="comments-list-topbar">
          <div className="topbar-title">{`${list.length}  条${title}`}</div>
          <div className="topbar-options">时间倒序</div>
        </div>
        <ul>
          {list.map(c => (
            <CommentItem key={c._id} data={c} />
          ))}
        </ul>
      </div>
    );
  }
}
