import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  CarouselItem,
  Section,
  EventsSection,
  BoardMembers,
} from '../../components';
import {
  Container,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import { getInfo } from '../../services';
import { ErrorDialog } from '../../components/ErrorDialog/ErrorDialog';

export const Home = () => {
  const [about, setAbout] = useState('');
  const [thingsWeDo, setThingsWeDo] = useState('');
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(false);
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
  const getAboutInfo = async () => {
    try {
      const aboutData = await getInfo('about');
      setAbout(aboutData);
    } catch(err) {
      setError(err.message);
      setHasError(true);
    }
  }

  useEffect(() => {
    if (about === '') {
      getAboutInfo();
    }
  });

  const getWhatWeDoInfo = async () => {
    try {
      const data = await getInfo('things');
      setThingsWeDo(data);
    } catch (err) {
      setError(err.message);
      setHasError(true);
    }
  }

  useEffect(() => {
    if (thingsWeDo === '') {
      getWhatWeDoInfo();
    }
  });

  return (
    <Container className={classes.root}>
      <ErrorDialog title="Error" message={error} open={hasError} onClose={() => setHasError(false)} />
      <Carousel autoPlay animation="slide">
        {items.map((item) => (
          <CarouselItem item={item} />
        ))}
      </Carousel>
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
          />
      </Section>
        <BoardMembers />
    </Container>
  );
};
