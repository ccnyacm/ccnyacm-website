import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  picture: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 430,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  button: {
    marginLeft: 'auto',
  },
  cardContent: {
    marginTop: 0,
    alignSelf: 'flex-start',
    maxWidth: 300,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  subtitle: {
    color: theme.palette.text.subtitle,
    fontSize: 16,
  },
  subtitleContainer: {
    marginBottom: '5%',
  },
  icon: {
    color: '#3B72AE',
  }
}));