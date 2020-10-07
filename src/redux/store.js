    
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(thunk);
}

const initialState = {
  measureCategory: [],
  measurement: {},
  currentUser: {},
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;