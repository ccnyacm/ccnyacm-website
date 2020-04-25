import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { string } from 'prop-types';
import { useStyles } from './style';

export const Paragraph = ({ image, title, content }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img src={image} alt="" className={classes.image} />
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Box>
  )
};

Paragraph.defaultProps = {
  image: '',
};

Paragraph.propTypes = {
  image: string,
  title: string.isRequired,
  content: string.isRequired,
};
