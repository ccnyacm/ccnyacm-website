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

export const NewContentCard = ({
  title, content, buttonText, buttonAction
}) => (
  <Card>
    <CardHeader>
      <Typography>
        {title}
      </Typography>
    </CardHeader>
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