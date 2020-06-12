import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';
import { string, func } from 'prop-types';

/**
 * 
 * @param title: title of Content Card
 * @param buttonText: text that goes insided the action button
 * @param buttonAction: This is the action executed by the action button
 * @param content: a string with additional information
 */
export const NewContentCard = ({
  title, content, buttonText, buttonAction
}) => (
  <Card>
      <CardHeader
        title={title}
      />
    <CardContent>
      <Typography>
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={buttonAction}>
        <Typography>
          {buttonText}
        </Typography>
      </Button>
    </CardActions>
  </Card>
);

NewContentCard.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  buttonText: string.isRequired,
  buttonAction: func.isRequired,
}