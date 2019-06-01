import React, { Component } from 'react';
import { connect } from 'dva';
import Cookies from 'js-cookie';
import qs from 'qs';

// 权限校验页面
@connect(({ user }) => ({
  user
}))
class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const {
      dispatch,
      location: { search },
      history
    } = this.props;
    const { token, from } = qs.parse(search, { ignoreQueryPrefix: true });

    if (token) {
      dispatch({
        type: 'user/fetchUser',
        authorization: token,
        success: () => {
          Cookies.set('token', token);
          console.log('跳转到页面', from);
          if (from) {
            window.location.replace(from);
          } else {
            history.replace('/home');
          }
        },
        error: () => {
          history.replace('/home');
        }
      });
    }else{
      history.replace('/home');
    }
  }

  render() {
    return <div>跳转中...</div>;
  }
}

export default Verify;
