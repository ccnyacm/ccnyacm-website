import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    marginLeft: theme.spacing(2),
  },
  image: {
    width: 120,
    height: 50,
  },
  box: {
    marginRight: '60%',
  },
}));

export default useStyles;
