/** 
 * Note, at first I was about to create the card content myself, 
 * However, I forgot that we said we were going to use Material UI components! (Which has cards!)
 */

import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  CardActionArea,
  Button,
  CardActions,
} from '@material-ui/core';
import appContext from '../../context/appContext';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';
import { useStyles } from './style';

/** NOTE, this page creates the Card, by calling Material UI, and passing props through parent Event */



export const EventCard = ({ event, className, mlh}) => {
  const classes = useStyles();
  const { setSelectedEvent } = useContext(appContext);

  if (mlh) {
    event = {
      ...event,
      title: event.name,
      description: event.description,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      imageUrl: event.imageUrl,
    }
  } else {
    event = {
      ...event,
      // dates come as a Firestore.TimeStamp object which has the form {_seconds: 0, _nanoseconds: 0}
      // where seconds in the number of seconds since 9/1/1970. to get the date we multiply seconds by a 1000 
      startDate: new Date(event.startDate.seconds * 1000),
      endDate: new Date(event.endDate.seconds * 1000),
    }
  }

  const dateConfigOptions = { year: 'numeric', month: 'short', day: 'numeric'};
  const dateRange = `${event.startDate.toLocaleString('en-US', dateConfigOptions)} - ${event.endDate.toLocaleString('en-US', dateConfigOptions)}`;
  const timeConfigOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
  const timeRange = `${event.startDate.toLocaleString('en-US', timeConfigOptions)} to ${event.endDate.toLocaleString('en-US', timeConfigOptions)}`;

  const handleOnClick = () => {
    if (mlh) {
      window.location = event.url;
    } else {
      setSelectedEvent(event);
      window.location = `/event/${event.id}`;
    }
  }

  return(
      <Card className={`${classes.card} ${className}`}>
        <CardActionArea onClick={handleOnClick}> 
          <CardHeader
            title={event.title}
            titleTypographyProps={{ color: 'primary' }}
            subheader={event.host}
          />
          <CardMedia
            className={classes.media}
            image={event.imageUrl}
            title="Bujar" /** The image should describe the event! */
          />
          <CardContent>
            <Typography className={classes.typography}>
              {dateRange}
            </Typography>
            {
              // display only if the event is not from mlh
              !mlh
              && <Typography className={classes.typography}>
                {timeRange}
              </Typography>
            }
          </CardContent>
        </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Button color="primary" onClick={handleOnClick}>
              <MoreHorizIcon color="secondary" />
            </Button>
          </CardActions>
      </Card>
  );

}