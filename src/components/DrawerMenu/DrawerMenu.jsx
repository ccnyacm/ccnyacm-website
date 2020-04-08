import React, { useState } from 'react';
import { 
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './style';


export const DrawerMenu = ({ routes }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon size={30} className={classes.icon} />
      </IconButton>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
        >
          <List>
            {
              routes.map((route) => (
                <ListItem
                  button
                  key={route}
                  component={Link}
                  to={route === 'Home' ? '/' : route}
                >
                  <ListItemText>
                    {route}
                  </ListItemText>
                </ListItem>
              ))
            }
            <ListItem
              button
              onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
              >
                <ListItemText>
                  Join Us
                </ListItemText>
              </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}