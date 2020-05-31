import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background,
  },
  events: {
    backgroundColor: '#f9f9f9',
    paddingBottom: '4%',
  }
}));

export default useStyles;
