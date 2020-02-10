import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  buttonLeft: {
    marginRight: theme.spacing(2),
    color: '#fff',
    fontWeight: '600',
  },
  buttonRight: {
    marginLeft: '60%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
    },
    minWidth: 100
  },
  image: {
    width: 120,
    height: 50,
  },
  box: {
    minWidth: 255,
  },
}));

export default useStyles;
