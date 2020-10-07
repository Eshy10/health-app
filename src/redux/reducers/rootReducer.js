import { combineReducers } from 'redux';
import measureCategoryReducer from './measureCategoryReducer';
import measureReducer from './measurementReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  measureCategory: measureCategoryReducer,
  measurement: measureReducer,
  currentUser: userReducer,
});

export default rootReducer;