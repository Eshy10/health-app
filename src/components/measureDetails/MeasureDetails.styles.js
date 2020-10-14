import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    margin: '0 auto',
    marginTop: '5em',
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  title: {
    color: '#2ad042',
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#313944',
  },
  oval2: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: '5px',
    height: '60px',
    borderRadius: '50%',
    width: '60px',
    marginRight: '.6em',

  },
}));

export default useStyles;
