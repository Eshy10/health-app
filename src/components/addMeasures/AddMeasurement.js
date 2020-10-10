import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BottomNavbar from '../bottomNav/bottomNav';
import useStyles from './AddMeasurement.styles'

const AddMeasureCard = ({props, name}) => {
  const classes = useStyles(props);
  const { measurecardName } = useParams();

  
  const initialFormState = {
    value:'',
    date:'',
    category_id: measurecardName
};

  const [values, setValues] = useState(initialFormState);

  const handleChange = event => {

  }

  const handleSubmit = event => {

  }

  return (
    <div>
    <Navbar/>
    <div className= {classes.root}>
      <form className={classes.form} onSubmit = {handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="number"
        onChange = {handleChange}
        value= {values.email}
        label= {measurecardName}
        name="number"
        autoComplete="number"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange = {handleChange}
        value= {values.password}
        name="date"
        type="date"
        id="date"
        autoComplete="date"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ backgroundColor: '#2ad042' }}
        className={classes.submit}
      >
        Add
      </Button>
    </form>
  </div>
  <BottomNavbar/>
  </div>
  );
}

export default AddMeasureCard;
