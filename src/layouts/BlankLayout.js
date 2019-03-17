import React, { Component } from "react";
import { Route, Redirect, Switch } from "dva/router";
import QueueAnim from "rc-queue-anim";
import pathToRegexp from "path-to-regexp";
import DocumentTitle from "react-document-title";
import { connect } from "dva";
import Developing from "../routes/Developing";
import { getRoutes } from "../utils/utils";

@connect()
export default class BlankLayout extends Component {
  componentDidMount() {
    // 请求用户信息
    this.props.dispatch({
      type:'user/fetchUser'
    })
  }
  
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = "3L先生";
    let currRouterData = null;
    // match params path
    Object.keys(routerData).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = routerData[key];
      }
    });
    if (currRouterData && currRouterData.name) {
      title = `${currRouterData.name} - 3L先生`;
    }
    return title;
  }

  render() {
    const { match, routerData } = this.props;
    // console.log('BlankLayout', this.props)
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <QueueAnim type="top" delay={300}>
          <Switch>
            {getRoutes(match.path, routerData).map(item => <Route key={item.key} path={item.path} component={item.component} exact={item.exact} authority={item.authority} redirectPath="/exception/403" />)}
            <Redirect exact from="/" to="/home" />
            <Route render={() => <Developing />} />
          </Switch>
        </QueueAnim>
      </DocumentTitle>
    );
  }
}
