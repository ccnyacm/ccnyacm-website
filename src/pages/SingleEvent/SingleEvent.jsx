import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
  Card,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { getEventById } from '../../services';
import { useStyles } from './styles';


export const SingleEvent = () => {
  const [event, setEvent] = useState({});
  const [hasError, setHasError] = useState(false);
  const [dateRange, setDateRange] = useState('');
  const [timeRange, setTimeRange] = useState('');
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
        setHasError(true);
      }
    };
    getEvent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectOnError = () => {
    if (hasError) {
      return <Redirect to="error" />
    }
    return null;
  }

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
      {redirectOnError()}
      <Toolbar />
      <Card className={classes.paper}>
        <Box className={classes.box}> 
          <img src={event.imageUrl} alt="Logo" />
          <Typography variant="h4">
            {event.title}
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemText
              primary="Topic: "
              secondary={event.title}
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary="Date: " 
              secondary={dateRange}
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Time: "
              secondary={timeRange}
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Hosted by: "
              secondary={event.host}
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            /> 
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="RSVP: "
              secondary={
                <Link href={event.rsvp}>
                  Click Here
                </Link>
              }
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Description"
              secondary={event.description}
              primaryTypographyProps={{ className: classes.label }}
              secondaryTypographyProps={{ className: classes.text }}
            />
          </ListItem>
        </List>
      </Card>
      </Container>
  );
};