import React from 'react';
import { Grid } from '@material-ui/core';
import { array } from 'prop-types';
import { BoardMemberCard } from '../BoardMemberCard';

export const BoardMemberCardList = ({ members }) => (
  <Grid container spacing={2}>
    {
     members.map((member) => (
       <Grid item>
         <BoardMemberCard member={member} />
       </Grid>
     ))
    }
  </Grid>
);

BoardMemberCardList.proTypes = {
  members: array.isRequired,
}
