import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AppState } from '../context';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home/Home';
import { Events } from '../pages/Events/Events';
import { SingleEvent } from '../pages/SingleEvent/SingleEvent';
import { About } from '../pages/About/About';
import { SignIn } from '../pages/SignIn/SignIn';
import { CmsHome } from '../pages/CmsHome/CmsHome';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute  } from './PrivateRouter';

export const AppRouter = () => (
  <AppState>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/events" component={Events} />
        <PublicRoute exact path="/about" component={About} />
        <PublicRoute exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/cms" component={CmsHome} />
        <PublicRoute exact path="/error" component={Error} />
        <PublicRoute exact path="/:id" component={SingleEvent} />
      </Switch>
    </Router>
  </AppState>
);
