import React from 'react';
import { Toolbar, Container, Typography } from '@material-ui/core';

export const Error = () =>(
  <Container>
    {/* prevent navbar from covering this page */}
    <Toolbar /> 
    <Typography 
      variant="h3" 
      align="center"
      style={{ marginTop: '15%', marginBottom: '15.5%' }}
    >
      Page Not Found
    </Typography>
  </Container>
) 
