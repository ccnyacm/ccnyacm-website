import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  gridListTile: {
    margin: '1%',
    minWidth: 300,
  },
  gridListTileBar: {
    // background:
    //   'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 14,
  },
  icon: {
    color: '#55A5FA',
  },
  eventButton: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
