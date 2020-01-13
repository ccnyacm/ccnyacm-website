import React from 'react';
import { Route } from 'react-router-dom';
import { func } from 'prop-types';
import { Fab, Toolbar } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons'
import { ScrollToTop } from '../components/ScrollToTop';
import { NavBar } from '../components/NavBar';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      <>
        <NavBar />
        <Toolbar />
        <Component {...props} />
        <ScrollToTop scrollStep={100} delayInMS={16.6}>
          <Fab color="inherit" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollToTop>
      </>
    )}
  />
);

PublicRoute.propTypes = {
  component: func.isRequired,
};
