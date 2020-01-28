import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';
import { useStyles } from './style';

export const BoardMemberCard = ({ member }) => {
  const classes = useStyles();
  const {firstName, lastName, profilePicture, shortBiography, title } = member;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card>
      <CardActionArea className={classes.actionArea}>
        <CardMedia 
          className={classes.picture}
          image={profilePicture}
          title={fullName}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" color="Primary" component="p">
            {fullName}
          </Typography>
          <Typography className={classes.subtitle}>
            {title}
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            {shortBiography}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button className={classes.button}>
          <MoreHorizIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
