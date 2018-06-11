import React, { Component } from 'react';
import { withRouter } from 'dva/router';
import { Badge } from '../../components/Badge';
import styles from './ResponsiveHeader.less';
import expandArrow from './expand-arrow.svg';


class ResponsiveHeader extends Component {
  state = {
    isOpen: false,
  }

  handleExpandBtnClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { match: { path } } = this.props;
    console.log(this.props, path);
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
            <a href="#/home" className={`link ${path === '/home' ? 'active' : ''}`}>HOME</a>
            <a href="#/resume" className={`link ${path === '/resume' ? 'active' : ''}`}>RESUME</a>
            <a href="#/project" className={`link ${path === '/project' ? 'active' : ''}`}>PROJECT</a>
            <a href="#/blog" className={`link ${path === '/blog' ? 'active' : ''}`} >BLOG</a>
            <a href="#/my-life" className={`link ${path === '/my-life' ? 'active' : ''}`}>MY LIFE</a>
            <a href="#/contact" className={`link ${path === '/contact' ? 'active' : ''}`}>CONTACT</a>
          </div>
          <div className="nav right">
            <a href="#/chat" className={`chat-btn link ${path === '/chat' ? 'active' : ''}`}>
              CHAT
              <Badge count="99" />
            </a>
            <a href="#/login" className={`login-btn link ${path === '/login' ? 'active' : ''}`}>LOGIN</a>
            <a href="#/join" className={`join-btn link ${path === '/join' ? 'active' : ''}`}>JOIN FREE</a>
          </div>
        </aside>
      </header>
    );
  }
}

const ResponsiveHeader2 = withRouter(ResponsiveHeader);
export default ResponsiveHeader2;