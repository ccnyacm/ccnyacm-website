import React from 'react';
import { Container, Toolbar } from '@material-ui/core';
import { SignInForm } from '../../components';

export const SignIn = () => {
  const message = "hello";
  return (
    <Container>
      <Toolbar/>
      <SignInForm />
    </Container>
  );
}
