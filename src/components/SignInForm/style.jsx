import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 600,
  },
  form: {
    marginTop: '1%',
  },
  title: {
    marginTop: '5%',
  },
  button: {
    marginTop: '2%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
  },
}));