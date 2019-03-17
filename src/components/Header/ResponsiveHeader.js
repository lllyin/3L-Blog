import React, { Component } from 'react';
import pathToRegexp from 'path-to-regexp';
import { withRouter } from 'dva/router';
import { connect } from 'dva';
import { Badge } from '../Badge';
import styles from './ResponsiveHeader.less';
import expandArrow from './expand-arrow.svg';
import { jumpToLogin } from '../../services/api';

/**
 * 匹配路径
 * @param regStr {string}  匹配字符串
 * @param path {string} 要被匹配的路径
 * @returns {Boolean} 返回一个布尔值
 */
function isRightPath(regStr, path) {
  return pathToRegexp(`/${regStr}(.*)`).test(path);
}

@connect(({ user }) => ({
  user
}))
class ResponsiveHeader extends Component {
  state = {
    isOpen: false
  };

  handleExpandBtnClick = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };

  // 处理登录
  handleLogin = () => {
    jumpToLogin();
  };

  // 处理登出
  handleLoginOut = () => {
    const { dispatch } = this.props;
    // jumpToLogin();

    dispatch({
      type: 'user/logout'
    });
  };

  render() {
    const { isOpen } = this.state;

    const {
      user: { userInfo }
    } = this.props;
    const isLogin = userInfo && userInfo.name;
    // console.log(user.userInfo.name)
    const {
      location: { pathname }
    } = this.props;

    return (
      <header className={styles.header}>
        <aside className="nav-upper">
          <a className="logo-box">
            <div className="logo">3L先生</div>
          </a>
          <a className="arrow-box" onClick={this.handleExpandBtnClick}>
            <div className={`arrow ${isOpen ? 'open' : ''}`}>
              <img width={35} height={35} src={expandArrow} alt="展开" />
            </div>
          </a>
        </aside>
        <aside className={`nav-lower ${isOpen ? 'open' : ''}`}>
          <div className="nav left">
            <a href="#/home" className={`link ${isRightPath('home', pathname) ? 'active' : ''}`}>
              HOME
            </a>
            <a href="#/resume" className={`link ${isRightPath('resume', pathname) ? 'active' : ''}`}>
              RESUME
            </a>
            <a href="#/project" className={`link ${isRightPath('project', pathname) ? 'active' : ''}`}>
              PROJECT
            </a>
            <a href="#/blog" className={`link ${isRightPath('blog', pathname) ? 'active' : ''}`}>
              BLOG
            </a>
            <a href="#/my-life" className={`link ${isRightPath('my-life', pathname) ? 'active' : ''}`}>
              MY LIFE
            </a>
            <a href="#/contact" className={`link ${isRightPath('contact', pathname) ? 'active' : ''}`}>
              CONTACT
            </a>
          </div>
          <div className="nav right">
            <a href="#/chat" className={`chat-btn link ${isRightPath('chat', pathname) ? 'active' : ''}`}>
              CHAT
              <Badge count="99" />
            </a>
            <a className={`login-btn link ${isRightPath('login', pathname) ? 'active' : ''}`}>
              <span onClick={this.handleLogin} className="username">
                {isLogin ? userInfo.name : 'LOGIN'}
              </span>
              {isLogin && (
                <span className="logout" onClick={this.handleLoginOut}>
                  登出
                </span>
              )}
            </a>
            <a
              href="//www.liaolunling.top"
              target="_blank"
              rel="noopener noreferrer"
              className={`join-btn link ${isRightPath('join', pathname) ? 'active' : ''}`}
            >
              旧版网站
            </a>
          </div>
        </aside>
      </header>
    );
  }
}

const ResponsiveHeader2 = withRouter(ResponsiveHeader);

export default ResponsiveHeader2;
