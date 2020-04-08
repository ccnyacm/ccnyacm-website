import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
} from '@material-ui/core';
import { getEventById } from '../../services';
import appContext from '../../context/appContext';
import { useStyles } from './styles';


export const SingleEvent = () => {
  const [event, setEvent] = useState({});
  const [dateRange, setDateRange] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const { setError, setHasError } = useContext(appContext);
  const classes = useStyles();


  const getIdFromUrl = () => {
    const strings = window.location.pathname.split('/');
    return strings[strings.length - 1];
  };

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await getEventById(getIdFromUrl());
        setEvent(data);
      } catch(error) {
        setError(error.message);
        setHasError(true);
      }
    };
    getEvent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (event.hasOwnProperty('startDate') && event.hasOwnProperty('endDate')) {
      const dateConfigOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      const timeConfigOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const startDate = new Date(event.startDate.seconds * 1000);
      const endDate = new Date(event.endDate.seconds * 1000);
      const dateStr = `${startDate.toLocaleString('en-US', dateConfigOptions)} - ${endDate.toLocaleString('en-US', dateConfigOptions)}`;
      const timeStr = `${startDate.toLocaleString('en-US', timeConfigOptions)} to ${endDate.toLocaleString('en-US', timeConfigOptions)}`;
      setDateRange(dateStr);
      setTimeRange(timeStr);
    }
  }, [event, event.endDate, event.startDate])

  console.log(window.location)

  return (
    <Container className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Box className={classes.box}> 
          <img src={event.imageUrl} alt="Logo" />
          <Typography variant="h4">
            {event.title}
          </Typography>
        </Box>
        <Typography>
          Date :{dateRange}
        </Typography>
        <Typography>
          Time: {timeRange}
        </Typography>
        <Typography>
          Hosted By:
        {event.host}
        </Typography>
        <Typography>
          {event.description}
        </Typography>
      </Paper>
      </Container>
  );
};