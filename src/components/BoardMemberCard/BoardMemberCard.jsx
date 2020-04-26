import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Link,
  IconButton,
} from '@material-ui/core';
import { 
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Home as WebsiteIcon,
} from '@material-ui/icons';
import { useStyles } from './style';

export const BoardMemberCard = ({ member }) => {
  const classes = useStyles();
  const {
    firstName, lastName, profilePicture, biography, website,
    position, linkedin, facebook, email, github, graduationYear 
  } = member;
  const fullName = `${firstName} ${lastName}`;

  const addWebsiteButton = () => {
    if (website) {
      return (
        <IconButton aria-label="Website">
          <WebsiteIcon className={classes.icon} />
        </IconButton>
      );
    }
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent 
        className={classes.actionArea}
      >
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
            {position}
          </Typography>
          <Typography className={classes.subtitle}>
            {`CC ${graduationYear}`}
          </Typography>
          <Typography variant="body2" color="secondary">
            {biography}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <IconButton aria-label="LinkedIn" className={classes.button} component={Link} href={linkedin}>
          <LinkedInIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="Facebook" className={classes.button} component={Link} href={facebook}>
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton  aria-label="GitHub" className={classes.button} component={Link} href={github}>
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="Email" className={classes.button} component={Link} href={`mailto:${email}`}>
          <EmailIcon className={classes.icon} />
        </IconButton>
        {addWebsiteButton()}
      </CardActions>
    </Card>
  );
};
