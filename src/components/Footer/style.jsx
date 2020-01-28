import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363547',
    width: '100%',
    height: 150,
  },
  text: {
    color: '#f7f7f7',
    fontSize: 12,
  },
  icon: {
    color: '#55A5FA',
    marginLeft: '5%',
    marginRight: '5%',
  },
  link: {
    color: '#55A5FA',
    textDecoration: 'none',
  },
}));