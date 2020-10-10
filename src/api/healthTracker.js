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

    const getMeasureCategories = () => {
    const token = localStorage.getItem('token')
    const promise = axios.get('http://localhost:3001/api/v1/measure_categories',
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    }
    )
    const promiseData = promise.then(res => res.data);
    promise.catch(error => { throw (error); });
    return promiseData;
    }

    const addMeasurement = measure => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const measurements = {
            value: measure.value,
            date: measure.date,
            measure_category_id: measure.measure_category_id
        };
        const promise = axios.post('http://localhost:3001/api/v1/measurements', measurements, config
        )
        const promiseData = promise.then(res => res.data);
        promise.catch(error => { throw (error); });
        console.log(promiseData)
        return promiseData;
        }

        
    const getAllMeasurements = () => {
        const token = localStorage.getItem('token')
        const promise = axios.get('http://localhost:3001/api/v1/measurements',
        {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        )
        const promiseData = promise.then(res => res.data);
        promise.catch(error => { throw (error); });
        return promiseData;
        }
    
    return { signUpUser, loginUser, getMeasureCategories, addMeasurement, getAllMeasurements };
  })();
  
  export default HealthApi;