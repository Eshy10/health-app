import { combineReducers } from 'redux';
import measureCategoryReducer from './measureCategoryReducer';
import measureReducer from './measurementReducer';
import userReducer from './userReducer';
import getMeasurementReducer from './getMeasurementsReducer';
import authFormErrors from './authErrors';

const rootReducer = combineReducers({
  categories: measureCategoryReducer,
  measurement: measureReducer,
  currentUser: userReducer,
  measurements: getMeasurementReducer,
  errors: authFormErrors,
});

export default rootReducer;
