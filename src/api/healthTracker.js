import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const HealthApi = (() => {
  const signUpUser = user => async dispatch => {
    try {
      const data = await axios.post(
        'https://nameless-temple-95690.herokuapp.com/signup',
        {
          users: {
            email: user.email,
            name: user.name,
            password: user.password,
            password_confirmation: user.password_confirmation,
          },
        },
      );
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      window.location = '/homepage';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };
  const loginUser = user => async dispatch => {
    try {
      const data = await axios.post(
        'https://nameless-temple-95690.herokuapp.com/auth/login',
        {
          users: {
            email: user.email,
            password: user.password,
          },
        },
      );
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      window.location = '/homepage';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getMeasureCategories = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('https://nameless-temple-95690.herokuapp.com/api/v1/measure_categories',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getCategories(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const addMeasurement = measure => async dispatch => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const measurements = {
      value: measure.value,
      date: measure.date,
      measure_category_id: measure.measure_category_id,
    };
    try {
      const data = await axios.post('https://nameless-temple-95690.herokuapp.com/api/v1/measurements', measurements, config);
      dispatch(reducerAction.addMeasurements(data.measure));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getAllMeasurements = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('https://nameless-temple-95690.herokuapp.com/api/v1/measurements',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getMeasurements(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getAllMeasurementId = id => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get(`https://nameless-temple-95690.herokuapp.com/api/v1/measurements/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getMeasuresId(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  return {
    signUpUser,
    loginUser,
    getMeasureCategories,
    addMeasurement,
    getAllMeasurements,
    getAllMeasurementId,
  };
})();

export default HealthApi;
