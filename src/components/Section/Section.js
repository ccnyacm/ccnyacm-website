import React from 'react';
import useStyles from './style';
import {
  Container,
  Box,
  Typography,
} from '@material-ui/core';

export const Section = ({ children, title, className }) => {
  const classes = useStyles();
    
  return (
    <Box className={`${classes.container} ${className}`}>
      <Typography variant="h4" color="inherit" className={classes.title}>
        {title}
      </Typography>
      <Container>
          {children}
      </Container>
    </Box>
  );
}