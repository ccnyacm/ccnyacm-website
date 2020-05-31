import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    height: 90,
    width: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: '1%',
    marginBottom: '3%'
  },
}));