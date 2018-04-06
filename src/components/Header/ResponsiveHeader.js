import React, { Component } from 'react';
import { Badge } from '../../components/Badge';
import styles from './ResponsiveHeader.less';
import expandArrow from './expand-arrow.svg';

export default class ResponsiveHeader extends Component {
  state = {
    isOpen: false,
  }

  handleExpandBtnClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <header className={styles.header}>
        <aside className="nav-upper">
          <a className="logo-box">
            <div className="logo">
              3L先生
            </div>
          </a>
          <a className="arrow-box" onClick={this.handleExpandBtnClick}>
            <div className={`arrow ${isOpen ? 'open' : ''}`}>
              <img width={35} height={35} src={expandArrow} alt="展开" />
            </div>
          </a>
        </aside>
        <aside className={`nav-lower ${isOpen ? 'open' : ''}`}>
          <div className="nav left">
            <a href="#" className="link active">HOME</a>
            <a href="#" className="link">RESUME</a>
            <a href="#" className="link">PROJECT</a>
            <a href="#" className="link" >BLOG</a>
            <a href="#" className="link">MY LIFE</a>
            <a href="#" className="link">CONTACT</a>
          </div>
          <div className="nav right">
            <a href="#/login" className="chat-btn link">
              CHAT
              <Badge count="99" />
            </a>
            <a href="#/login" className="login-btn link">LOGIN</a>
            <a href="#/login" className="join-btn">JOIN FREE</a>
          </div>
        </aside>
      </header>
    );
  }
}
