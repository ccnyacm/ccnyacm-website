import React from "react";
import {
  AppBar, Toolbar, Button, Typography, Link, Box,
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
          <Box className={classes.box}>
            {
              routes.map((route) => (
                <Button
                  color="secondary"
                  onClick={() => window.location = route === 'Home' ? '/' : route}
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
