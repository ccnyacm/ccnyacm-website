import React from 'react';
import {Event} from '../Event/Event'
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { string, bool, array, func } from 'prop-types';


export const EventList = ({ events, title, mlhEvents, hasMore, onMore }) => {  
  const displayMoreButton = () => {
    if (hasMore) {
      return (
        <Grid item>
          <Card style={{ height: '100%' }}>
            <CardActionArea style={{ height: '100%' }} onClick={() => onMore(mlhEvents)}>
              <CardContent>
                <Link onClick={() => onMore(hasMore)}>
                  ...More
            </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
    return <span/>
  }

  return(
    <div>
      <h2>{title}</h2>
      {/** We can edit this later to make it like a time-line, similar to old website */}
      <Grid container spacing={2}>
      {
        events.map(  (event, index) => (
          <Grid item key={event.id || `event${index}`}> 
              <Event 
                key={event.id || `event${index}`}
                event={event} 
                mlh={mlhEvents}
              /> 
          </Grid>))
      }
      {displayMoreButton()}
      </Grid>
    </div>
  );
};

EventList.defaultProps = {
  title: '',
  mlhEvents: false,
  hasMore: false,
  onMore: () => {},
};

EventList.propTypes = {
  events: array.isRequired,
  title: string,
  mlhEvents: bool,
  hasMore: bool,
  onMore: func,
}
