import measureReducer from '../../redux/reducers/measurementReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get and add measurements', () => {
  const initialState = {
    measurement: {},
  };

  it('should return the initial state', () => {
    expect(measureReducer(undefined, {
      type: reducerAction.addMeasurements,
    })).toEqual(initialState);
  });

  it('should return the initial state', () => {
    expect(measureReducer(undefined, {
      type: reducerAction.getMeasuresId,
    })).toEqual(initialState);
  });
});
