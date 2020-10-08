import axios from 'axios';


const HealthApi = (() => {
    const signUpUser = user => {
      const promise = axios.post(
        'http://localhost:3001/signup',
        {
            users: {
                email: user.email,
                name: user.name,
                password: user.password,
                password_confirmation: user.password_confirmation
   
            }
        }
      );
      const promiseData = promise.then(res => res.data);
      promise.catch(error => { throw (error); });
      return promiseData;
    };
    const loginUser = user => {
      const promise = axios.post(
        'http://localhost:3001/auth/login',
        {
            users: {
                email: user.email,
                password: user.password,
   
            }
        }
      );
      const promiseData = promise.then(res => res.data);
      promise.catch(error => { throw (error); });
      return promiseData;
    };
    return { signUpUser, loginUser };
  })();
  
  export default HealthApi;