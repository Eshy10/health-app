const measureReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_MEASURES':
        return { ...state, currentUser: action.payload }

        default:
        return state;
    }
  };
  
  export default measureReducer;