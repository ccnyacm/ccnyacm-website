import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { signIn, isSignedIn } from '../../services/authServices';
import appContext from '../../context/appContext';
import { useStyles } from './style';

export const SignInForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setError, setHasError } = useContext(appContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = await signIn(email, password);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setError('An error occurred. Please try again later.');
        setHasError(true);
      }
    } catch (err) {
      setError(err.message);
      setHasError(true);
    }
  }

  return (
    <Container className={classes.root}>
      <CssBaseline />
      {isLoggedIn | isSignedIn() && <Redirect to="/cms" />}
      <Typography className={classes.title} variant="h3">
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="on"
          autoFocus
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Typography className={classes.buttonText}>
            Sign In
          </Typography>
        </Button>
      </form>
    </Container>
  );
}
