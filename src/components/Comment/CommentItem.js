import React from "react";
import { Icon, Tooltip } from "antd";
import momentAgo from "moment-ago";

import styles from "./CommentItem.less";

const CommentItem = ({ data, className = "", onLike }) => {
 
  return (
    <li className={`${styles["comment-item"]} ${className}`}>
      <div className="comment-item-meta">
        <span className="name">
          {data.from ? (
            data.from
          ) : (
            <Tooltip
              placement="right"
              title={
                <div>
                  来无影，去无踪。该位大佬虽留言，但未留下任何个人信息。
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
