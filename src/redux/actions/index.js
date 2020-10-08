import axios from 'axios';

export const userPostFetch = user => {
    return async dispatch => {
      const data = await axios.post("http://localhost:3001/signup", {
         users: {
             email: user.email,
             name: user.name,
             password: user.password,
             password_confirmation: user.password_confirmation

         }
        });
           if (data.message) {
               console.warn(data.message)
           } else {
            localStorage.setItem("token", data.token);
            dispatch(loginUser(data.user));
           }
            
  
    }
  }

  export const userLoginFetch = user => {
    return async dispatch => {
      const data = await axios.post("http://localhost:3001/auth/login", {
         users: {
             email: user.email,
             password: user.password,

         }
        });
           
        if (data.message) {
            console.warn(data.message)
        } else {
         localStorage.setItem("token", data.token);
         dispatch(loginUser(data.user));
        }
  
    }
  }
  
  export const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })