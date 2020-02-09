import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Chip,
  Typography,
  Button
} from '@material-ui/core';
import { useStyles } from './styles';

export const TodayEvents = ({ events }) => {
  const classes = useStyles();
  const timeFormat = { hour: 'numeric', minute: 'numeric', hour12: true }
  return (
    <Carousel animation="slide">
      {
        events.map(({ imageUrl, title, startDate, endDate, url, description }) => (
          <Paper
            className={classes.container}
            key={title}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})` }}
            onClick={() => window.location = url}
          >
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Chip label="Today" color="primary" />
            <Typography className={classes.text}>
              {`${new Date(startDate.seconds * 1000).toLocaleTimeString(undefined, timeFormat)} - ${new Date(endDate.seconds * 1000).toLocaleTimeString(undefined, timeFormat)}`}
            </Typography>
            <Typography className={classes.text}>
              {description}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.location = url}>
              Learn More
            </Button>
          </Paper>
        ))
      }
    </Carousel>
  );
};
