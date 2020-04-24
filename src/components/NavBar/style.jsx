import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    textDecoration: 'none',
  },
  buttonLeft: {
    marginRight: theme.spacing(2),
    color: '#fff',
    fontWeight: '600',
  },
  buttonRight: {
    minWidth: 100,
    marginLeft: 'auto',
  },
  image: {
    width: 120,
    height: 50,
  },
  box: {
    minWidth: 255,
  },
  menuBox: {
    marginLeft: 'auto'
  },
  joinButton: {
    fontWeight: '700'
  }
}));

export default useStyles;
