import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import { Fab, Box } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons'
import { ScrollToTop } from '../components/ScrollToTop';
import {PrivateNavBar } from '../components/PrivateNavBar';
import { Footer } from '../components/Footer';
import { ErrorDialog } from '../components/ErrorDialog';
import { isSignedIn } from '../services/authServices';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={(props) => ( isSignedIn() ? (
        <Box style={{ backgroundColor: '#fff' }}>
          <PrivateNavBar />
          <ErrorDialog />
          <Component {...props} />
          <ScrollToTop scrollStep={100} delayInMS={16.6}>
            <Fab color="inherit" size="small" aria-label="scroll back to top">
              <KeyboardArrowUp />
            </Fab>
          </ScrollToTop>
          <Footer />
        </Box>
      ) : (
        <Redirect to="/signin" />
      )
      )}
    />
  );

PrivateRoute.propTypes = {
  component: func.isRequired,
};
