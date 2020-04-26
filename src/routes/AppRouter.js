import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppState } from '../context';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home/Home';
import { Events } from '../pages/Events/Events';
import { SingleEvent } from '../pages/SingleEvent/SingleEvent';
import { About } from '../pages/About/About';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => (
  <AppState>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/events" component={Events} />
        <PublicRoute exact path="/about" component={About} />
        <PublicRoute exact path="/error" component={Error} />
        <PublicRoute exact path="/:id" component={SingleEvent} />
      </Switch>
    </Router>
  </AppState>
);
