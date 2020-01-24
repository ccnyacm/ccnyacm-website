import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
//HashRouter
//import { HashRouter as Router, Switch } from 'react-router-dom';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home/Home';
import { Events } from '../pages/Events/Events';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/events" component={Events} />
      <PublicRoute path="*" component={Error} />
    </Switch>
  </Router>
);
