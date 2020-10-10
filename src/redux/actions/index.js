export const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })

  export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  })

  export const getCategories = category => ({
    type: 'GET_CATEGORIES',
    payload: category
  })

  
  export const addMeasurements = measurement => ({
    type: 'ADD_MEASURES',
    payload: measurement
  })