import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  picture: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'row',
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
    maxWidth: 300
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