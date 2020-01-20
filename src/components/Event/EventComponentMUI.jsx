/** 
 * Note, at first I was about to create the card content myself, 
 * However, I forgot that we said we were going to use Material UI components! (Which has cards!)
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

/** NOTE, this page creates the Card, by calling Material UI, and passing props through parent Event */


const useStyles = makeStyles({
    card: {
      maxWidth: 275, /** SETTING A MAX WIDTH so that images size and everything wraps! */
      justifyContent: 'center',
      floatLeft: '10%'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        //maxWidth: 275,
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    typography:{
        textAlign: 'center'
    }

  });



export const EventCard = (props) => {
    const classes = useStyles();

    return(
    <div>
        <Card className={classes.card} id={props.event.id}>
            <CardHeader
                title={props.event.title}
                subheader={/* "Hosted By " +  // Had to remove hosted by, because host will then print undefined if null. ReactDOM is smart  enough to not add attributes if its set to NULL!*/props.event.host}
            />
            <CardMedia
                className={classes.media}
                image={props.event.eventImage}
                title="Bujar" /** The image should describe the event! */
            />
            <CardContent>
                <Typography className={classes.typography}>When: {props.event.date}</Typography>
                <Typography className={classes.typography}>Time: {props.event.timeStart} to {props.event.timeEnd}</Typography>
                <Typography>{props.event.description}</Typography>
                <Typography><a href={props.event.url}>{props.event.url}</a></Typography>
            </CardContent>
        </Card>
    </div>
    );

}