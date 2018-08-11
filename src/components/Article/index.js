import React, { PureComponent } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import TableRender from './TableRender';
import styles from './Abstract.less';

export default class Article extends PureComponent {
  render() {
    const { data, history } = this.props;
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
          <ReactMarkdown
            source={data.content}
            renderers={{ code: CodeBlock, table: TableRender }}
          />
        </div>
        <p className="more">
          <a className="read-more" onClick={() => { this.props.history.goBack(); }}>
            返回
          </a>
        </p>
      </div>
    );
  }
}
