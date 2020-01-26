import React from 'react';
import {EventCard} from '../Event/Event'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { string, bool, array } from 'prop-types';

export const EventList = ({ events, title, mlhEvents, hasMore, linkRef }) => {
  return(
    <div>
      <h2>{title}</h2>
      {/** We can edit this later to make it like a time-line, similar to old website */}
      <Grid container spacing={2}>
      {
        events.map(  (event, index) => (
          <Grid item> 
              <EventCard key={event.id || `event${index}`} event={event} mlh={mlhEvents} /> 
          </Grid>))
      }
      {
          hasMore && <Card><CardContent><Link to={linkRef}>...More</Link></CardContent></Card>
      }
      </Grid>
    </div>
  );
};

EventList.propTypes = {
  events: array.isRequired,
  title: string,
  mlhEvents: bool,
  hasMore: bool,
  linkRef: string
}
