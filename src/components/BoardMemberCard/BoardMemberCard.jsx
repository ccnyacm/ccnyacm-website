import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
  CardActions,
  Grid
} from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';
import { useStyles } from './style';

export const BoardMemberCard = ({ member }) => {
  const classes = useStyles();
  const {firstName, lastName, profilePicture, shortBiography } = member;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          className={classes.picture}
          image={profilePicture}
          title={fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" color="Primary" component="p">
            {fullName}
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
            {shortBiography}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <MoreHorizIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
