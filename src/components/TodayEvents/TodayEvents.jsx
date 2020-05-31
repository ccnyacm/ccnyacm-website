import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Chip,
  Typography,
  Button,
  CircularProgress,
  Link as ExternalLink
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getEventsByDate } from '../../services/eventServices';
import { getMLHEventsByDate } from '../../services/mlhEventRequest';
import appContext from '../../context/appContext';
import { useStyles } from './styles';

export const TodayEvents = () => {
  const classes = useStyles();
  const timeFormat = { hour: 'numeric', minute: 'numeric', hour12: true }
  const [events, setEvents] = useState([]);
  const { setError, setHasError} = useContext(appContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodayEvents = async () => {
      try {
        setLoading(true);
        const now = new Date();
        const data = await getEventsByDate(now);
        const hackathons = await getMLHEventsByDate(now);
        setEvents([...data, ...hackathons]);
      } catch (err) {
        setError(err.message);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    getTodayEvents();
  }, [setError, setHasError]);

  const getCorrectLink = (url) => {
    if (url) {
      return ExternalLink
    } else {
      return Link;
    }
  }

  return loading ? <CircularProgress /> : events.length === 0 ?
  (
    <Paper className={classes.altContainer}>
      <Typography variant="h4" align="center" className={classes.altBanner} >
        No Events Today!
      </Typography>
    </Paper>
  )
  :
  (
    <Carousel animation="slide">
      {
        events.map(({ id, imageUrl, title, startDate, endDate, url, description }) => (
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
            <Button 
              variant="contained"
              color="primary"
              component={getCorrectLink(url)}
              to={`/${id}`} // if local link read this line
              href={url} // if external link read this line
            >
              Learn More
            </Button>
          </Paper>
        ))
      }
    </Carousel>
  );
};
