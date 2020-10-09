import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Copyright from '../../Copyright';
import HealthApi from '../../api/healthTracker';
import {loginUser} from '../../redux/actions/index';
import useStyles from './SignUpForm.styles';


const SignUpForm = ({props}) => {
  const classes = useStyles(props);
  const dispatch = useDispatch()
  let history = useHistory();

  const initialFormState = {
    name:'',
    email:'',
    password:'',
    password_confirmation: ''
};

  const [values, setValues] = useState(initialFormState);


  const handleChange = event => {
    const { name, value } = event.target;
    setValues({...values, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault()
     HealthApi.signUpUser(values).then(data => {
       localStorage.setItem("token", data.auth_token);
        dispatch(loginUser(data.values));
        history.push("/login")
      });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style = {{backgroundColor: '#1c85d0'}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: '#ffffff' }}>
            Sign up to stay healthy
          </Typography>
          <form className={classes.form} onSubmit = {handleSubmit}>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          onChange = {handleChange}
          value = {values.name}
          autoComplete="full name"
          autoFocus
        />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange = {handleChange}
              value = {values.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange = {handleChange}
              value = {values.password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="Password Confirmation"
            onChange = {handleChange}
            value = {values.password_confirmation}
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#2ad042' }}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2" style={{ color: '#ffffff' }}>
                  {"Already have an account? Log in here"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUpForm;