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
        <Typography className={classes.suptitle}>
          Welcome to
        </Typography>
        <Typography className={classes.title}>
          CCNY ACM
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
        >
          <Typography className={classes.buttonText}>
            Join Our Mailing List
          </Typography>
      </Button>
      </Card>
    </Paper>
  )
}