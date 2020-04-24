import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Button, Typography, Box,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ElevationScroll } from '../ElevationScroll';
import { DrawerMenu } from '../DrawerMenu';
import useStyles from './style';

export const NavBar = () => {
  const classes = useStyles();
  const routes = ['home', 'events', 'about'];
  const [hideDrawer, setHideDrawer] = useState(window.innerWidth > 760)

  useEffect(() => {
    const handleResize = () => {
      const currentHideDrawer = (window.innerWidth > 760);
      if (currentHideDrawer !== hideDrawer) {
        setHideDrawer(currentHideDrawer);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [hideDrawer])

  console.log(window.location)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.root}>
            <Typography variant="h6" color="inherit" className={classes.title} component={NavLink} to="/">
              <img src={process.env.PUBLIC_URL + '/ccny-acm.png'} alt="CCNY ACM" className={classes.image} />
            </Typography>
            {
              hideDrawer ?
                <Box className={classes.box}>
                  {
                    routes.map((route) => (
                      <Button
                        component={NavLink}
                        color="secondary"
                        to={route === 'home' ? '/' : route}
                        className={classes.buttonLeft}
                        key={route}
                      >
                        {route}
                      </Button>
                    ))
                  }
                </Box>
              :
              <Box className={classes.menuBox}> 
                  <DrawerMenu routes={routes} />
              </Box>
            }
            {
              hideDrawer && (
                <Button
                  variant="contained"
                  className={classes.buttonRight}
                  onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
                >
                  <Typography className={classes.joinButton}>
                    Join Us
                  </Typography>
                </Button>
              )
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
