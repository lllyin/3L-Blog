import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
// import BasicLayout from '../../layouts/BasicLayout';
import { Content } from '../../components/Layout';


export default class Home extends Component {
  render() {
    return (
      <section>
        {/* <BasicLayout /> */}
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          i ame content
          <h1> i am title</h1>
          <h1> i am title 2</h1>
        </Content>
      </section>
    );
  }
}
