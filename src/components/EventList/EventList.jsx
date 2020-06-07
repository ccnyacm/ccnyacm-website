import React from 'react';
import {Event} from '../Event/Event'
import {
  GridList,
  GridListTile,
  Typography,

} from "@material-ui/core";
import { string, bool, array, func } from 'prop-types';
import { GridListMoreLink } from '../GridListMoreLink';


export const EventList = ({ events, title, mlhEvents, hasMore, onMore }) => {  
  const displayMoreButton = () => {
    if (hasMore) {
      return (
        <GridListTile>
          <GridListTile>
            <Typography>
              ...More
            </Typography>
          </GridListTile>
        </GridListTile>
        // <Grid item>
        //   <Card style={{ height: '100%' }}>
        //     <CardActionArea style={{ height: '100%' }} onClick={() => onMore(mlhEvents)}>
        //       <CardContent>
        //         <Link onClick={() => onMore(hasMore)}>
        //           ...More
        //     </Link>
        //       </CardContent>
        //     </CardActionArea>
        //   </Card>
        // </Grid>
      );
    }
    return <span/>
  }

  return(
    <div>
      <h2>{title}</h2>
      {/** We can edit this later to make it like a time-line, similar to old website */}
      <GridList cols={2.5} style={{ flexWrap: 'nowrap', transform: 'translateZ(0)',}}>
        {
          events.map((event, index) => (
              <Event
                key={event.id || `event${index}`}
                event={event}
                mlh={mlhEvents}
              /> 
          ))
        }
        {hasMore && <GridListMoreLink onClick={() => onMore(hasMore)} />}
      </GridList>
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
