import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '20%',
      margin: '0 auto',
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
      marginTop: '5em',
      padding: '2em',
      textAlign: 'center',
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    title: {
        color: '#2ad042'
    }
  });

  export default useStyles;