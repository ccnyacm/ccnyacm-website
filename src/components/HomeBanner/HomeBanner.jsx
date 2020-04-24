import React from 'react';
import {
  Paper,
  Button,
  Typography,
  Card
} from '@material-ui/core';
import { useStyles } from './style';

export const HomeBanner = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Card className={classes.innerBanner}>
        <Typography variant="h3">
          Welcome to
        </Typography>
        <Typography variant="h2" className={classes.title}>
          CCNY ACM
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
        >
          <Typography className={classes.buttonText}>
            Join our newsletter
          </Typography>
      </Button>
      </Card>
    </Paper>
  )
}