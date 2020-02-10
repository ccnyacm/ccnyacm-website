import React from "react";
import {
  AppBar, Toolbar, Button, Typography, Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" color="inherit" className={classes.title} component={Link} to="/">
              <img src={process.env.PUBLIC_URL + '/ccny-acm.png'} alt="CCNY ACM" className={classes.image} />
            </Typography>
          <Box className={classes.box}>
            {
              routes.map((route) => (
                <Button
                component={Link}
                  color="secondary"
                  to={route === 'Home' ? '/' : route}
                  className={classes.buttonLeft}
                >
                  {route}
                </Button>
              ))
            }
          </Box>
          <Button 
            variant="contained"
            className={classes.buttonRight}
            onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
          >
            Join Us
          </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
