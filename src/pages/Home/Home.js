import React, { useState, useEffect, useContext } from 'react';
import {
  EventsSection,
  BoardMembers,
  HomeBanner,
  AboutSection,
  Section,
} from '../../components';
import {
  Box,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import { getInfo } from '../../services';
import appContext from '../../context/appContext';

export const Home = () => {
  const [thingsWeDo, setThingsWeDo] = useState('');
  const { setError, setHasError } = useContext(appContext);
  const classes = useStyles();

  useEffect(() => {
    const getWhatWeDoInfo = async () => {
      try {
        const data = await getInfo('things');
        setThingsWeDo(data);
      } catch (err) {
        setError(err.message);
        setHasError(true);
      }
    }
    getWhatWeDoInfo();
  }, []);

  return (
    <div>
      <HomeBanner />
      <Box className={classes.root}>
        <AboutSection />
        <Section title={thingsWeDo.title}>
          <Typography variant="p" color="secondary">
            {thingsWeDo.content}
          </Typography>
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
