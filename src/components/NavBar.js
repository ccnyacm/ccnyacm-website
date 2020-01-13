import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Button, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import { ElevationScroll } from './ElevationScroll';

class NavBar extends PureComponent {
  render() {
    const classes = {};

    return (
      <div className={classes.root}>
        <CssBaseline />
        <ElevationScroll>
          <AppBar position="fixed">
            <Toolbar>
              <ForumRoundedIcon edge="start" aria-label="UniFree-forum" />
              <Typography variant="h6" color="inherit" className={classes.title} component={Link} to="/">
                UniFree
            </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </div>
    );
  }
}

export { NavBar };
