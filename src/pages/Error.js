import React from 'react';
import { Toolbar } from '@material-ui/core';

export const Error = () =>(
  <>
    {/* prevent navbar from covering this page */}
    <Toolbar /> 
    <h1>Not found</h1>;
  </>
) 
