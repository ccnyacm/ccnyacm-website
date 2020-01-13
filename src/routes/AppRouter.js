import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Error } from '../pages/Error'
import { Home } from '../pages/home';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="*" component={Error} />
    </Switch>
  </Router>
);
