import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Blog from './routes/Blog';
import BasicLayout from './layouts/BasicLayout';
import MyLife from './routes/MyLife';
import Developing from './routes/Developing';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/project" exact component={Project} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/my-life" exact component={MyLife} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/test" render={(props) => { return (<BasicLayout {...props} />); }} />
        <Route path="/" component={Developing} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
