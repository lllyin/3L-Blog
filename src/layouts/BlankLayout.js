import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import QueueAnim from 'rc-queue-anim';
import pathToRegexp from 'path-to-regexp';
import DocumentTitle from 'react-document-title';
import Developing from '../routes/Developing';
import { getRoutes } from '../utils/utils';

export default class BlankLayout extends Component {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '3L先生';
    let currRouterData = null;
    // match params path
    Object.keys(routerData).forEach((key) => {
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
    console.log('网页标题', this.getPageTitle());
    const { match, routerData } = this.props;
    // console.log('BlankLayout', this.props)
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <QueueAnim type="top" delay={300}>
          <Switch>
            {getRoutes(match.path, routerData).map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                  authority={item.authority}
                  redirectPath="/exception/403"
                />
              );
            }
            )}
            <Redirect exact from="/" to="/home" />
            <Route render={() => <Developing />} />
          </Switch>
        </QueueAnim>
      </DocumentTitle>
    );
  }
}
