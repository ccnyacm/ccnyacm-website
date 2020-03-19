import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Typography,
} from '@material-ui/core';
import { getMemberById } from '../../services';
import appContext from '../../context/appContext';

export const SingleMember = () => {
  const [member, setMember] = useState({});
  const { setError, setHasError } = useContext(appContext);

  const getIdFromUrl = () => {
    const strings = window.location.pathname.split('/');
    return strings[strings.length - 1];
  }

  useEffect(() => {
    const getMember = async () => {
      try {
        const data = await getMemberById(getIdFromUrl());
        setMember(data);
      } catch (error) {
        setError(error.message);
        setHasError(true);
      }
    }
    getMember();
  }, []);

  return (
    <Container>
      <Typography >
        {`${member.firstName} ${member.lastName}`}
      </Typography>
    </Container>
  );
}