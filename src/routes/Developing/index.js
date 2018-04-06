import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class Developing extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          离离原上草，一岁一枯荣。
          <br />
          这里是待开发的荒野
        </Content>
      </section>
    );
  }
}
