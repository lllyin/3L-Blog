import React, { Component } from 'react';
import { ResponsiveHeader } from '../../components/Header';
import { Content } from '../../components/Layout';

export default class Project extends Component {
  render() {
    return (
      <section>
        <ResponsiveHeader />
        <Content className="home-box" style={{ marginTop: 30 }}>
          <h1> Project Page </h1>
          project page content
        </Content>
      </section>
    );
  }
}
