import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/index';
import useStyles from './Navbar.styles';

const Navbar = ({ props }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#42B5E8' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <EmojiNatureIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Health Tracker
          </Typography>
          <Button onClick={Logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  props: PropTypes.func,
};

Navbar.defaultProps = {
  props: () => {},
};

export default Navbar;
