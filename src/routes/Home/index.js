import React, { Component } from 'react';
import Texty from 'rc-texty';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class Home extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> <Texty type="top" mode="random">Home Page </Texty></h1>
          <Texty type="left">home page content,developing...</Texty>
        </Content>
      </section>
    );
  }
}
