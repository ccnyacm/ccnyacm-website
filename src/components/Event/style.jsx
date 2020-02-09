import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    maxWidth: 290, /** SETTING A MAX WIDTH so that images size and everything wraps! */
    justifyContent: 'center',
    floatLeft: '10%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    //maxWidth: 275,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  typography: {
    textAlign: 'center'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});
