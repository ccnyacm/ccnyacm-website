import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: '1%',
    marginBottom: '1%',
    cursor: 'pointer',
  },
  icon: {
    color: '#fff',
    padding: 0,
    margin: 0,
  }
});
