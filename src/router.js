import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterData } from './common/router';
import Developing from './routes/Developing';

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const BlankLayout = routerData['/'].component;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BlankLayout {...props} />} />
        <Route path="/" component={Developing} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
