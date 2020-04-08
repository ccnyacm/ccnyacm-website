import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },

  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    width: '100%',
  },
}));