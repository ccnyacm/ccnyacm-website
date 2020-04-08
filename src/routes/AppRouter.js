import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppState } from '../context';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home/Home';
import { Events } from '../pages/Events/Events';
import { SingleMember } from '../pages/SingleMember/SingleMember';
import { SingleEvent } from '../pages/SingleEvent/SingleEvent';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => (
  <AppState>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/events" component={Events} />
        <PublicRoute exact path="/events/:id" component={SingleEvent} />
        <PublicRoute exact path="/members/:id" component={SingleMember} />
        <PublicRoute path="*" component={Error} />
      </Switch>
    </Router>
  </AppState>
);
