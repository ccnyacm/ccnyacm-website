/** 
 * Note, at first I was about to create the card content myself, 
 * However, I forgot that we said we were going to use Material UI components! (Which has cards!)
 */

import React, { useContext } from 'react';
import {
  Button,
  Link as ExternalLink,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';
import { Link } from 'react-router-dom'
import appContext from '../../context/appContext';
import { AddCircleOutline as AddCircleOutlineIcon } from '@material-ui/icons';
import { useStyles } from './style';

/** NOTE, this page creates the Card, by calling Material UI, and passing props through parent Event */



export const Event = ({ event, className, mlh}) => {
  const classes = useStyles();
  const { setSelectedEventId } = useContext(appContext);

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
  const component = mlh ? ExternalLink : Link;
  return(
    <GridListTile className={`${classes.gridListTile} ${className}`}>
      <Button 
        className={classes.eventButton}
        component={component}
        to={`/${event.id}`}
        href={event.url}
      >
        <img src={event.imageUrl} className={classes.image} alt={event.title} />
      </Button>
      <GridListTileBar 
        title={event.title}
        titlePosition="top"
        subtitle={dateRange}
        classes={{
          root: classes.gridListTileBar,
          title: classes.title,
          subtitle: classes.subtitle,
        }}
        actionIcon={
          <Button color="primary" component={component} to={`/${event.id}`} href={event.url}>
            <AddCircleOutlineIcon className={classes.icon}/>
          </Button>
        }
      />
    </GridListTile>
  );

}