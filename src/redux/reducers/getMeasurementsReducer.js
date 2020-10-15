const getMeasurementReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEASUREMENTS':
      return action.payload;

    default:
      return state;
  }
};

export default getMeasurementReducer;
