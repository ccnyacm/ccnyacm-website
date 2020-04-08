import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Chip,
  Typography,
  Button
} from '@material-ui/core';
import { getEventsByDate } from '../../services/eventServices';
import { getMLHEventsByDate } from '../../services/mlhEventRequest';
import appContext from '../../context/appContext';
import { useStyles } from './styles';

export const TodayEvents = () => {
  const classes = useStyles();
  const timeFormat = { hour: 'numeric', minute: 'numeric', hour12: true }
  const [events, setEvents] = useState([]);
  const { setError, setHasError} = useContext(appContext);

  useEffect(() => {
    const getTodayEvents = async () => {
      try {
        const now = new Date();
        const data = await getEventsByDate(now);
        const hackathons = await getMLHEventsByDate(now);
        setEvents([...data, ...hackathons]);
      } catch (err) {
        setError(err.message);
        setHasError(true);
      }
    };
    getTodayEvents();
  }, [setError, setHasError]);


  return (
    <Carousel animation="slide">
      {
        events.map(({ imageUrl, title, startDate, endDate, url, description }) => (
          <Paper
            className={classes.container}
            key={title}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})` }}
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
