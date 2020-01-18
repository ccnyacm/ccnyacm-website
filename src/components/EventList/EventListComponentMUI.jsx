import React from 'react';
import {Component} from 'react';
import {EventCard} from '../Event/EventComponentMUI'
import Grid from "@material-ui/core/Grid";


export const EventList = (props) => {
    return(
        <Grid container direction= {props.direction} alignItems={props.alignItems} spacing={2}>
        {
            props.events.map(  event => 
                                <Grid item> 
                                    <EventCard key={event.id} event={event}> 
                                    </EventCard>
                                </Grid>) 
        }
        </Grid>
    )
}