import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BottomNavbar from '../bottomNav/bottomNav';
import {addMeasurements} from '../../redux/actions/index';
import HealthApi from '../../api/healthTracker';
import useStyles from './AddMeasurement.styles';

const AddMeasureCard = ({props, name}) => {
  const classes = useStyles(props);
  let { measurecardIndex } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  
  const initialFormState = {
    value: '',
    date:'',
    measure_category_id: Number(measurecardIndex)
};

  const [values, setValues] = useState(initialFormState);

  const handleChange = event => {
    const { name, value, type } = event.target;
    setValues({...values, [name]: type === 'number' ? parseInt(value) : value });
  }

  const handleSubmit = event => {
  event.preventDefault()
  HealthApi.addMeasurement(values).then(data => {
     dispatch(addMeasurements(data.values));
     history.push("/")
   }).catch(error => console.log(error));
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
        id="value"
        type = 'number'
        onChange = {handleChange}
        value= {values.value}
        label= {measurecardIndex === '1' ? 'Weight' : 'Cholestrol Level'}
        name="value"
        autoComplete="number"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange = {handleChange}
        value= {values.date}
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
