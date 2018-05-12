import React, { Component } from 'react';

import styles from './Abstract.less';

export default class Abstract extends Component {
  render() {
    return (
      <div className={styles['article-excerpt']}>
        <h2 className="article-title">
          <a>文章标题文章标题</a>
        </h2>
        <div className="article-info">
          <span><a href="#">聆逸</a></span>
          <span>2000浏览</span>
          <span>8评论</span>
          <span>2018-5-11 18:00(0天以前)</span>
        </div>
        <div className="article-abstract">
          文章摘要摘要炸药
          文章摘要摘要炸药
          文章摘要摘要炸药
          文章摘要摘要炸药
          <p>
            文章摘要摘要炸药
            文章摘要摘要炸药
            文章摘要摘要炸药
            文章摘要摘要炸药
          </p>
        </div>
        <p className="more">
          <a className="read-more" href="#/blog/detail">
            Read more
          </a>
        </p>
      </div>
    );
  }
}
