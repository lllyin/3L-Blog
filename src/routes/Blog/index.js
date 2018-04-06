import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class Blog extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Blog Page </h1>
          blog page content
        </Content>
      </section>
    );
  }
}
