import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselItem, Section } from '../../components';
import {
  Container,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import { apiRequest } from '../../services';

export const Home = () => {
  const [about, setAbout] = useState('');
  const [thingsWeDo, setThingsWeDo] = useState('');
  const [error, setError] = useState('');
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
  const getABoutInfo = async () => {
    try {
      const response = await apiRequest('/info/about', 'GET', null);
      if(response.status && response.status === 200) {
        const data = await response.json();
        setAbout(data);
      }
    } catch(err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    if (about === '') {
      getABoutInfo();
    }
  },[about]);

  const getWhatWeDoInfo = async () => {
    try {
      const response = await apiRequest('/info/thingswedo', 'GET', null);
      if (response.status && response.status === 200) {
        const data = await response.json();
        setThingsWeDo(data);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    if (thingsWeDo === '') {
      getWhatWeDoInfo();
    }
  }, [thingsWeDo])

  return (
    <Container className={classes.root}>
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
    </Container>
  );
};
