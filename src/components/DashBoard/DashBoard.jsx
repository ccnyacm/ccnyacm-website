import React, { useContext, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import appContext from '../../context/appContext';
import { ContentCard } from '../ContentCard';
import { NewContentCard } from '../NewContentCard';

export const DashBoard = () => {
  const { events, members, getMembers, getEvents } = useContext(appContext);

  useEffect(() => {
    if(members.length === 0) {
      getMembers();
    }
  }, [getMembers, members])

  useEffect(() => {
    if (events.length === 0) {
      getEvents();
    }
  },[events, getEvents]);

  const formatEvents = (event) => {
    return `${event.title}`;
  };

  const formatMembers = (member) => {
    return `${member.position} - ${member.firstName} ${member.lastName}`;
  };

  console.log(events, members)
  return (
    <Grid container>
      <Grid item xs={6}>
        <ContentCard
          title="Events"
          buttonText="Edit Events"
          contentData={events.filter((event, index) => index < 8)}
          formatData={formatEvents}
        />
      </Grid>
      <Grid item xs={6}> 
        <ContentCard
          title="Members"
          buttonText="Edit Members"
          contentData={members.filter((member, index) => index < 8)}
          formatData={formatMembers}
        />
      </Grid>
      <Grid item>
        <NewContentCard
          title="Members"
          content="Add a new Menber"
          buttonText="New Member"
        />
      </Grid>
      <Grid item>
        <NewContentCard
          title="Events"
          content="Add a new Event"
          buttonText="New Event"
        />
      </Grid>
    </Grid>
  );
};