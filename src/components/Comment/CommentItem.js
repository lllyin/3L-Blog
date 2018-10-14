import React from 'react';
import { Icon, Tooltip } from 'antd';
import momentAgo from 'moment-ago';

import styles from './CommentItem.less';

const CommentItem = ({ data, className = '', onLike }) => {
  return (
    <li className={`${styles['comment-item']} ${className}`}>
      <div className="comment-item-meta">
        <span className="name">
          {data.from ? (
            data.from
          ) : (
            <Tooltip
              placement="right"
              title={
                <div>
                  有请大佬
                  <a>登陆</a>/<a>注册</a>, 留下大名
                </div>
              }
            >
              佚名
            </Tooltip>
          )}
        </span>
        <span className="date">{momentAgo(data.create_time).ago()}</span>
      </div>
      <div className="comment-item-content">{data.content}</div>
      <div className="comment-item-footer">
        <span
          className="like-btn"
          onClick={() => {
            onLike(data);
          }}
        >
          <Icon type="like" theme="filled" className="icon" />
          {data.like}
        </span>
      </div>
    </li>
  );
};

export default CommentItem;
