import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import {
  Container,
  Typography,
} from '@material-ui/core';

export const SingleEvent = () => {
  const { selectedEvent } = useContext(appContext);
  const { title } = selectedEvent;
  return (
    <Container>
      <Typography variant="h3">
        {title}
      </Typography>
      
    </Container>
  );
};