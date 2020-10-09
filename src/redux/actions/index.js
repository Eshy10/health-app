export const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })

  export const logoutUser = () => ({
    type: 'LOGOUT_USER'
  })