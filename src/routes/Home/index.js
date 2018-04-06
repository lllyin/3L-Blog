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
          <h1> Home Page </h1>
          home page content
        </Content>
      </section>
    );
  }
}
