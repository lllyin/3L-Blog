import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class MyLife extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30, marginBottom: 30 }}>
          <h1> Contact Page </h1>
          contact page content
        </Content>
      </section>
    );
  }
}
