import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import { getEventById } from '../../services';
import appContext from '../../context/appContext';


export const SingleEvent = () => {
  const [event, setEvent] = useState({});
  const { setError, setHasError } = useContext(appContext);

  const getIdFromUrl = () => {
  const strings = window.location.pathname.split('/');
  return strings[strings.length - 1];
}

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await getEventById(getIdFromUrl());
        console.log(data);
        setEvent(data);
      } catch(error) {
        setError(error.message);
        setHasError(true);
      }
    }
    getEvent();
  }, []);

  return (
    <Container>
      <Typography variant="h3">
        {event.title}
      </Typography>
      
    </Container>
  );
};