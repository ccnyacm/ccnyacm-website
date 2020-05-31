import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  border: {
    borderBottomColor: theme.palette.text.primary,
    paddingBottom: '2%',
    paddingTop: '2%',
  },
  title: {
    fontWeight: '700',
    paddingBottom: '4%',
    paddingLeft: '1%',
  },
  container: {
    paddingTop: '4%',
    paddingBottom: '5%'
  }
}));

export default useStyles;
