import React, { Component } from 'react';
import { Route,Redirect, Switch } from 'dva/router';
import Developing from '../routes/Developing';
import { getRoutes } from '../utils/utils';

export default class BasicLayout extends Component {
  render() {
    const { match, routerData } = this.props;
    console.log('BlankLayout', this.props)
    return (
      <div>
        <Switch>
          {getRoutes(match.path, routerData).map(item => {
            return (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
                authority={item.authority}
                redirectPath="/exception/403"
              />
            )
          }
          )}
          <Redirect exact from="/" to="/home" />
          <Route render={()=><Developing/>} />
        </Switch>
      </div>
    )
  }
}