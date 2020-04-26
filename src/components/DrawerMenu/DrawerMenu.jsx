import React, { useState } from 'react';
import { 
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Toolbar,
  Divider,
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

  const remainingRoutes = routes.filter((route) => route !== 'home');

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
        <Toolbar />
        <List>
          {
            remainingRoutes.map((route) => (
              <ListItem
                button
                key={route}
                component={Link}
                to={route === 'home' ? '/' : route}
              >
                <ListItemText 
                  primary={route.toUpperCase()}
                  primaryTypographyProps={{ className: classes.text }}
                  />
              </ListItem>
            ))
          }
          <ListItem
            button
            onClick={() => window.location = 'http://eepurl.com/dLRIjg'}
            >
              <ListItemText 
                primary="JOIN US"
                primaryTypographyProps={{ className: classes.text }}
              />
            </ListItem>
        </List>
      </Drawer>
    </>
  );
}