import React, { Component } from 'react';
import Texty from 'rc-texty';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class MyLife extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> <Texty type="top" mode="random">MyLife Page  </Texty></h1>
          <Texty type="left"> MyLife page content,developing...</Texty>
        </Content>
      </section>
    );
  }
}
