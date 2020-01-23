import React from "react";
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Button, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ElevationScroll } from '../ElevationScroll';
import useStyles from './style';

export const NavBar = () => {
  const classes = useStyles();
  const routes = ['Home', 'Events', 'About'];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title} component={Link} to="/">
              <img src={process.env.PUBLIC_URL + '/ccny-acm.png'} alt="CCNY ACM" className={classes.image} />
          </Typography>

          {
            routes.map((route) => (
              <Button 
                color="secondary"
                component={Link}
                to={route === 'Home' ? '/' : route}>
                {route}
              </Button>
            ))
          }
          <Button>
            <Link to="/" >
              Join Us
            </Link>
          </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
