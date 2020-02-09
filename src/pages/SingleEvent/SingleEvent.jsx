import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import { Container } from '@material-ui/core';

export const SingleEvent = () => {
  const { selectedEvent } = useContext(appContext);
  return (
    <Container>
      <p>This is a test</p>
    </Container>
  );
};