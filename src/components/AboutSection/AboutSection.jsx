import React, {useState, useEffect, useContext } from 'react';
import { Typography, Box } from '@material-ui/core';
import { Section } from '../Section';
import appContext from '../../context/appContext'
import { getInfo } from '../../services';
import { useStyles } from './style';

export const AboutSection = () => {
  const [about, setAbout] = useState({});
  const { setError, setHasError } = useContext(appContext);
  const classes = useStyles();

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
  }, []);

  return (
    <Section title={about.title} className={classes.section}>
      <Box className={classes.paper}>
        <Typography variant="p" color="secondary" className={classes.text}>
          {about.content}
        </Typography>
      </Box>
    </Section>
  );
};
