const initialState = {
    measurement: {}
}

const measureReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MEASURES':
        return { 
            ...state, 
            measurement: action.payload 
        }
        case 'GET_MEASURES':
            return action.payload

        default:
        return state;
    }
  };
  
  export default measureReducer;