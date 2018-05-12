import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Abstract } from '../../components/Article';
import { Content } from '../../components/Layout';

export default class BlogDetail extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Blog detail </h1>
          <Abstract />
        </Content>
      </section>
    );
  }
}
