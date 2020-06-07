import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { string, array, func} from 'prop-types';

export const ContentCard = ({
  title, buttonText, buttonAction, contentData, formatData
}) => {
  return (
    <Card>
      <CardHeader>
        <Typography>
          {title}
        </Typography>
      </CardHeader>
      <CardContent>
        <List> 
          {
            contentData.map((item) => (
              <ListItem>
                <ListItemText>
                  {
                    formatData ?
                    formatData(item)
                    :
                    item
                  }
                </ListItemText>
              </ListItem>
            ))
          }
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={buttonAction}>
          <Typography>
            {buttonText}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
};

ContentCard.propTypes = {
  title: string.isRequired,
  contentData: array.isRequired,
  buttonText: string.isRequired,
  buttonAction: func,
  formatData: func,
};

ContentCard.defaultProps = {
  buttonAction: () => {},
  formatData: null,
}