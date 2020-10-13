import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  tracks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '2em',
    marginRight: '2em',
    marginLeft: '2em',
    padding: '1em',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  title: {
    color: '#2ad042',
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
