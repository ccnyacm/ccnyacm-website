import React from 'react';
//import { BrowserRouter as Router, Switch } from 'react-router-dom';
//HashRouter
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Error } from '../pages/Error'
import { Home } from '../pages/Home';
import Events from '../pages/Events';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => (
  <Router>
    <Switch>
      {/** Changing this to events for my purporses of testing */}
      <PublicRoute exact path="/" component={Events} />
      <PublicRoute path="*" component={Error} />
    </Switch>
  </Router>
);
