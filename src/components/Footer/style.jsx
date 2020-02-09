import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363547',
    width: '100%',
    height: 150,
    marginTop: theme.spacing(4),
  },
  text: {
    color: '#f7f7f7',
    fontSize: 12,
  },
  icon: {
    color: '#55A5FA',
    width: 40,
    height: 40,
  },
  link: {
    color: '#55A5FA',
    textDecoration: 'none',
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
}));