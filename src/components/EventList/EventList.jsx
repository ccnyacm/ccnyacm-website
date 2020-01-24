import React from 'react';
import {EventCard} from '../Event/Event'
import Grid from "@material-ui/core/Grid";

export const EventList = ({ events, title, mlhEvents }) => {
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
      </Grid>
    </div>
  );
}