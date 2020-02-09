import React from 'react';
import {
  Typography,
  Link,
  CssBaseline,
  TableContainer,
  TableBody,
  TableRow,
} from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
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
            <Link href="https://www.instagram.com/ccnycitycollege/?hl=en">
              <InstagramIcon className={classes.icon} />
            </Link>
            <Link href="https://www.linkedin.com/in/ccnyacm/">
              <LinkedInIcon className={classes.icon} />
            </Link>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
};