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

/**
 * 
 * @param title: title of Content Card
 * @param buttonText: text that goes insided the action button
 * @param buttonAction: This is the action executed by the action button
 * @param contentData: an array of strings or objects containing the data
 * @param formatData: a function to format data if contentData is an array of objects
 * @description A component that is a card with data for the dashboard of CMS
 */
export const ContentCard = ({
  title, buttonText, buttonAction, contentData, formatData
}) => {
  return (
    <Card>
      <CardHeader
        title={title}
      />
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
  contentData: array,
  buttonText: string.isRequired,
  buttonAction: func,
  formatData: func,
};

ContentCard.defaultProps = {
  buttonAction: () => {},
  formatData: null,
}