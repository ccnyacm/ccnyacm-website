import React from 'react';
import {
  Grid,
  Box,
} from '@material-ui/core';
import { Paragraph } from '../Paragraph';

export const ParagraphList = () => {
  const things = [
    { 
      title: "Host a workshop", 
      content: `We collaborate with  tech professionals,
        faculty alumni and fellow students  to host tech talks and workshops. 
        It allows you to gain a skills or knowledge directly from people in the industry. `,
      image: "https://firebasestorage.googleapis.com/v0/b/ccnyacm-bb351.appspot.com/o/calendarIcon.png?alt=media&token=089a3d91-3f8b-4313-9ef2-cee724d80e3e"
    },
    {
      title: "Networking",
      content: `Our weekly meetings connect students with alumni and tech professionals and 
        corporate guests. Learn about opportunities available in certain companies or the cool 
        things our guess and fellow students are working on.`,
      image: "https://firebasestorage.googleapis.com/v0/b/ccnyacm-bb351.appspot.com/o/computericon.png?alt=media&token=10e4465c-0c3b-4c1d-bb82-e0d96526d080"
    },
    {
      title: "Prepare for technical Interviews",
      content: `We help students prepare for technical interviews. He host mock interview sessions.
         We also host competitions to help you hone your skills and be ready for an interview.`,
      image: "https://firebasestorage.googleapis.com/v0/b/ccnyacm-bb351.appspot.com/o/interviewicon.png?alt=media&token=361a0dab-ecc5-40e6-8cb0-6e2fcd3b72fa"
    }
  ];

  return (
    <Grid container justify="center" spacing={10} style={{width: '100%'}}>
      {
        things.map((item) => (
          <Grid item md={3} xs={12}>
            <Paragraph 
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}