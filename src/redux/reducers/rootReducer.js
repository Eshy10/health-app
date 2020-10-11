import { combineReducers } from 'redux';
import measureCategoryReducer from './measureCategoryReducer';
import measureReducer from './measurementReducer';
import userReducer from './userReducer';
import getMeasurementReducer from './getMeasurementsReducer'

const rootReducer = combineReducers({
  categories: measureCategoryReducer,
  measurement: measureReducer,
  currentUser: userReducer,
  measurements: getMeasurementReducer
});

export default rootReducer;