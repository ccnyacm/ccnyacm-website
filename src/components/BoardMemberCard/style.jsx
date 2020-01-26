import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  picture: {
    height: 200,
    objectFit: 'contain'
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'row',
  }
});