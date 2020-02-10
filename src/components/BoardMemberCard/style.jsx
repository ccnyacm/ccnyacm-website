import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  picture: {
    width: 200,
    height: 200,
    objectFit: 'contain'
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
  },
  subtitle: {
    marginBottom: '5%',
    color: theme.palette.text.subtitle,
  },
}));