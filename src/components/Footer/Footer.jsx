import React from 'react';
import {
  Typography,
  Link,
  CssBaseline,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
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
      <TableContainer className={classes.container}>
        <TableBody>
          <TableRow>
            <Typography className={classes.text}>
             Copyright © 2020 CCNY ACM | Website developed by <a className={classes.link} href="https://www.linkedin.com/in/engerthen/">Enger Then</a>
            </Typography>
          </TableRow>
          <TableRow className={classes.row}>
            <Link href="https://www.facebook.com/groups/ccnyacm/">
              <FacebookIcon className={classes.icon} />
            </Link>
            <Link href="https://www.flickr.com/photos/ccnyacm">
              <img src={process.env.PUBLIC_URL + '/icons/flickr.png'} alt="flickr" className={classes.icon} />
            </Link>
            <Link href="http://slides.com/ccnyacm">
              <KeyboardIcon className={classes.icon} />
            </Link>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
};