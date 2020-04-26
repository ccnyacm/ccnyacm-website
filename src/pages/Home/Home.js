import React, { useState, useEffect, useContext } from 'react';
import {
  EventsSection,
  BoardMembers,
  HomeBanner,
  AboutSection,
  Section,
  ParagraphList,
} from '../../components';
import { Box } from '@material-ui/core';
import useStyles from './style';


export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <HomeBanner />
      <Box className={classes.root}>
        <AboutSection />
        <Section title="What We Do">
          <ParagraphList />
        </Section>
        <Section title="Events" className={classes.events}>
          <EventsSection
            localNum={3}
            outsideNum={3}
            hasMore
            onMore={() => window.location = '/events'}
          />
        </Section>
        <BoardMembers />
      </Box>
    </div>

  );
};
