import React from "react";
import {
  AppBar, Toolbar, Button, Typography
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ElevationScroll } from '../ElevationScroll';
import { signOut } from '../../services/authServices';
import useStyles from './style';

export const PrivateNavBar = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" color="inherit" className={classes.title} component={NavLink} to="/">
              <img src={process.env.PUBLIC_URL + '/ccny-acm.png'} alt="CCNY ACM" className={classes.image} />
            </Typography>
              <Button
                variant="contained"
                className={classes.buttonRight}
                onClick={signOut}
              >
                <Typography className={classes.joinButton}>
                  Sign Out
                </Typography>
              </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
