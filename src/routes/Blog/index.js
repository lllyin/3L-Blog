import React, { Component } from 'react';
import { connect } from 'dva';
import { ResponsiveHeader } from '../../components/Header';
import Abstract  from '../../components/Article/Abstract';
import { Content } from '../../components/Layout';

@connect(({ article }) => ({
  article
}))
export default class Blog extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/fetch',
    })
  }

  render() {
    const { article } = this.props;
    console.log(this.props);
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Blog Page </h1>
          {
            article.list.map(articleItem => <Abstract key={articleItem._id} data={articleItem} />)
          }
        </Content>
      </section>
    );
  }
}
