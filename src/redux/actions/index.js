export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const getCategories = category => ({
  type: 'GET_CATEGORIES',
  payload: category,
});

export const addMeasurements = measurement => ({
  type: 'ADD_MEASURES',
  payload: measurement,
});

export const getMeasurements = measurement => ({
  type: 'GET_MEASUREMENTS',
  payload: measurement,
});

export const getMeasuresId = measurement => ({
  type: 'GET_MEASURES',
  payload: measurement,
});

export const formErrors = errors => ({
  type: 'GET_ERRORS',
  payload: errors,
});
