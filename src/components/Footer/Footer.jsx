import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
  CssBaseline
} from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Keyboard as KeyboardIcon,
} from '@material-ui/icons';
import { useStyles } from './style';

export const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography className={classes.text}>
          Website developed by <a className={classes.link}  href="https://www.linkedin.com/in/engerthen/">Enger Then</a> and onwed by CCNY ACM.
          <br/>
          <FacebookIcon
            className={classes.icon}
          />
          <KeyboardIcon
            className={classes.icon}
          />
        </Typography>
      </Container>
    </>
  );
};