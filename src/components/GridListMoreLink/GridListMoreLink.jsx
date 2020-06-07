import React from 'react';
import {
  Link,
} from '@material-ui/core';
import { ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import { Link as InnerLink } from 'react-router-dom';
import { func, bool } from 'prop-types';
import { useStyles } from './styles';

export const GridListMoreLink = ({ onClick, mlh }) => {
  const classes = useStyles();
  const CustomLink = mlh ? InnerLink : Link;
  return (
    <CustomLink 
      className={classes.root}
      onClick={onClick}
    >
      <ChevronRightIcon className={classes.icon} />
    </CustomLink>
  );
};

GridListMoreLink.propTypes = {
  onClick: func,
  mlh: bool
};

GridListMoreLink.defaultProps = {
  onClick: () => {},
  mlh: false,
};
