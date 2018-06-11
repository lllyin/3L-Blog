import React, { Component, PureComponent } from 'react';
import moment from 'moment';
import { MAX_CHAR_LENGTH } from '../../constant/config';
import styles from './Abstract.less';

export default class Abstract extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className={styles['article-excerpt']}>
        <h2 className="article-title">
          <a href={`#/blog/detail?id=${data._id}`}>{data.title}</a>
        </h2>
        <div className="article-info">
          <span><a href="#">{data.author}</a></span>
          <span>{data.views}浏览</span>
          <span>{data.comments && data.comments.length}评论</span>
          <span>
            {moment(data.create_time * 1000).format('YYYY-MM-DD HH:mm')}
            {`(${moment(data.create_time * 1000).fromNow()})`}
          </span>
        </div>
        <div className="article-abstract">
          {data.content && data.content.substr(0, MAX_CHAR_LENGTH)}
          <span>{data.content && data.content.length > MAX_CHAR_LENGTH ? '......' : ''}</span>
        </div>
        <p className="more">
          <a className="read-more" href={`#/blog/detail?id=${data._id}`}>
            Read more
          </a>
        </p>
      </div>
    );
  }
}
