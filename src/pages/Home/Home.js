import React, { useState, useEffect, useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  CarouselItem,
  Section,
  EventsSection,
  BoardMembers,
  HomeBanner,
} from '../../components';
import {
  Container,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import { getInfo } from '../../services';
import appContext from '../../context/appContext';

export const Home = () => {
  const [about, setAbout] = useState('');
  const [thingsWeDo, setThingsWeDo] = useState('');
  const { setError, setHasError } = useContext(appContext);
  const classes = useStyles();
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    }
  ]

  useEffect(() => {
    const getAboutInfo = async () => {
      try {
        const aboutData = await getInfo('about');
        setAbout(aboutData);
      } catch (err) {
        setError(err.message);
        setHasError(true);
      }
    }
    getAboutInfo();
  }, [setError, setHasError, about]);


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
  }, [setError, setHasError, thingsWeDo]);

  return (
    <div>
      <HomeBanner />
      <Container className={classes.root}>
        <Section title={about.title}>
          <Typography variant="p" color="secondary">
            {about.content}
          </Typography>
        </Section>
        <Section title={thingsWeDo.title}>
          <Typography variant="p" color="secondary">
            {thingsWeDo.content}
          </Typography>
        </Section>
        <Section title="Events">
          <EventsSection
            localNum={3}
            outsideNum={3}
            hasMore
            onMore={() => window.location = '/events'}
          />
        </Section>
        <BoardMembers />
      </Container>
    </div>

  );
};
