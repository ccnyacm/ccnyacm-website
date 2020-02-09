import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    height: 'auto',
    marginTop: theme.spacing(4),
    backgroundRepeat: 'repeat-x',
    backgrounSize: 'cover',
    backgroundPosition: 'center center',
    padding: theme.spacing(2),
  },
  text: {
    color: '#fff',
    fontWeight: "600",
    fontSize: 14,
    padding: theme.spacing(1),
    maxWidth: '50%',
  },
  title: {
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
}));