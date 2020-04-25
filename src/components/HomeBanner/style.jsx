import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgrounSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/bg_img.jpg)`,
    padding: theme.spacing(2),
    marginTop: '5%',
  },
  text: {
    color: '#fff',
    fontWeight: "600",
    fontSize: 14,
    padding: theme.spacing(1),
    maxWidth: '50%',
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: "700",
    fontSize: 70,
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  suptitle: {
    fontSize: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  innerBanner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '45%',
    height: '100%',
    padding: '5%',
    marginTop: '5%',
    marginBottom: '6%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15%',
      width: '80%',
      padding: '10%',
    },
  },

  button: {
    marginTop: theme.spacing(2),
  },
  buttonText: {
    fontWeight: '600',
  }
}));