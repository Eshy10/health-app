import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => (
  <Typography variant="body2" style={{ color: '#ffffff' }} align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Health Tracker
    </Link>
    {' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
