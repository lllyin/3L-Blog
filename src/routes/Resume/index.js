import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class Resume extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Resume Page </h1>
          resume page content
        </Content>
      </section>
    );
  }
}
