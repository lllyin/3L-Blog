import React, { Component } from 'react';
import {connect} from 'dva';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

@connect(({example})=>({
  example
}))
export default class Home extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Home Page </h1>
          home page content
        </Content>
      </section>
    );
  }
}
