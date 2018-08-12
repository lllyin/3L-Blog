import React, { Component } from 'react';
import { Content } from '../src/components/Layout';
import WithDva from '../utils/store';

@WithDva(({article})=>({
  article
}))
export default class Test extends Component {
  render() {
    return (
      <section>
        <h1>hello world blog</h1>
      </section>
    );
  }
}