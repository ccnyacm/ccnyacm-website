import React from 'react';
import {EventCard} from '../Event/EventComponentMUI'
import Grid from "@material-ui/core/Grid";

export const EventList = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            {/** We can edit this later to make it like a time-line, similar to old website */}
            <Grid container spacing={2}>
            {
                props.events.map(  event => 
                                    <Grid item> 
                                        <EventCard key={event.id} event={event}> 
                                        </EventCard>
                                    </Grid>) 
            }
            </Grid>
        </div>
    )
}