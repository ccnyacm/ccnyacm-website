import React from 'react';
import useStyles from './style';
import {
  Container,
  Box,
  Typography,
} from '@material-ui/core';

export const Section = ({ children, title }) => {
    const classes = useStyles();
    
    return (
        <Box component="div" className={classes.container}>
          <Typography variant="h5" color="inherit" className={classes.title}>
            {title}
          </Typography>
          <Container>
              {children}
            <Container>
              <Box borderBottom={0.5} className={classes.border} />
            </Container>
          </Container>
        </Box>
    )
}