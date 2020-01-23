import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselItem, Section } from '../../components';
import {
  Container,
  Typography,
} from '@material-ui/core';
import useStyles from './style';

export const Home = () => {
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
  return (
    <Container className={classes.root}>
      <Carousel autoPlay animation="slide">
        {items.map((item) => (
          <CarouselItem item={item} />
        ))}
      </Carousel>
      <Section title="About">
        <Typography variant="p" color="secondary">
          The Association of Computing Machinery Chapter at CCNY aims to foster a community of Computer Science students
          and tech enthusiasts who collaborate in developing the skills they need in the industry, expanding their network,
          participating in activities related to new technologies, and learning how to further their professional careers.

          We are very proudly supported by the CCNY Computer Science Department, the Computer Science Chairman, Professor Akira Kawaguchi,
          and by our wonderful Faculty Advisor, Professor Sam Fenster.
        </Typography>
      </Section>
      <Section title="Things We  Are Doing">
        <Typography variant="p" color="secondary">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia orci sollicitudin ipsum 
           aliquet hendrerit varius eget ligula. Vivamus sagittis varius nisi, sit amet mattis mi ultricies in.
           Integer semper turpis lorem, id finibus magna scelerisque sed. Maecenas nulla ante, feugiat sollicitudin
           rhoncus ac, maximus non lorem. Nullam sapien urna, maximus eget iaculis a, ornare quis dolor. Mauris 
           cursus luctus eros quis mollis. Suspendisse eu tincidunt purus. In nulla mauris, consequat ut lectus ut,
           tristique interdum dui. Proin vitae diam lectus. Donec mollis ultricies dignissim. Cras sit amet gravida
           diam, et molestie felis. Suspendisse potenti.

          Ut a odio nec metus aliquet vestibulum id vel mi. In ut urna imperdiet arcu fermentum tincidunt.
          Pellentesque congue sodales quam sed viverra. Pellentesque auctor velit non justo porta, eget porta 
          augue vestibulum. Quisque vitae tellus lectus. In odio lorem, iaculis sit amet scelerisque at, varius 
          in nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut 
          vestibulum pharetra elit ac imperdiet. Donec pharetra tellus quis iaculis convallis. Aliquam erat 
          volutpat. Ut maximus dignissim convallis. Donec eu odio quis ipsum fermentum lobortis sed sit amet 
          augue. Vestibulum porttitor quam eu scelerisque vehicula. Nam vestibulum pulvinar ex quis semper.
          Donec sed elit feugiat, aliquam eros ac, dictum lorem. Vestibulum tincidunt metus sed justo congue porta. 
        </Typography>
      </Section>
    </Container>
  );
};
