/** 
 * Note, at first I was about to create the card content myself, 
 * However, I forgot that we said we were going to use Material UI components! (Which has cards!)
 */

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from '@material-ui/core'
import { useStyles } from './style';

/** NOTE, this page creates the Card, by calling Material UI, and passing props through parent Event */



export const EventCard = ({ event, mlh}) => {
  const classes = useStyles();
  if (mlh) {
    event = {
      title: event.name,
      description: event.description,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
      imageUrl: event.imageUrl,
      host: '',
      url: ''
    }
  } else {
    event = {
      ...event,
      // dates come as a Firestore.TimeStamp object which has the form {seconds: 0, milliseconds: 0}
      // where sconds in the amount of seconds since 1970. to get the date we multiply seconds by a 1000 
      startDate: new Date(event.startDate._seconds * 1000),
      endDate: new Date(event.endDate._seconds * 1000),
    }
  }
  const dateConfigOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
  const dateRange = `${event.startDate.toLocaleString('en-US', dateConfigOptions)} - ${event.endDate.toLocaleString('en-US', dateConfigOptions)}`
  const timeConfigOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
  const timeRange = `${event.startDate.toLocaleString('en-US', timeConfigOptions)} to ${event.endDate.toLocaleString('en-US', timeConfigOptions)}`
  return(
  <div>
      <Card className={classes.card}>
          <CardHeader
              title={event.title}
              subheader={/* "Hosted By " +  // Had to remove hosted by, because host will then print undefined if null. ReactDOM is smart  enough to not add attributes if its set to NULL!*/event.host}
          />
          <CardMedia
              className={classes.media}
              image={event.imageUrl}
              title="Bujar" /** The image should describe the event! */
          />
          <CardContent>
              <Typography className={classes.typography}>
                When: {dateRange}
                </Typography>
                {
                  // display only if the event is not from mlh
            !mlh 
            && <Typography className={classes.typography}>
              {timeRange}
            </Typography>
                }
              <Typography>
                {event.description}
                </Typography>
              <Typography>
                <a href={event.url}>{event.url}</a>
                </Typography>
          </CardContent>
      </Card>
  </div>
  );

}