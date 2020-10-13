import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(1),
  },
  mainTitle: {
    textAlign: 'center',
  },

}));

export default useStyles;
