import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class MyLife extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1>MyLife Page </h1>
          MyLife page content
        </Content>
      </section>
    );
  }
}
