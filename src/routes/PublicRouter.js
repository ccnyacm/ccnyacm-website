import React from 'react';
import { Route } from 'react-router-dom';
import { func } from 'prop-types';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      <>
        <Component {...props} />
      </>
    )}
  />
);

PublicRoute.propTypes = {
  component: func.isRequired,
};
