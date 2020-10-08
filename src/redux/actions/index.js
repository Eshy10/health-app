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
           
            localStorage.setItem("token", data.token);
            console.log(localStorage.getItem("token"));
            dispatch(loginUser(data.user));
  
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })