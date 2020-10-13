import * as reducerAction from '../redux/actions/index';

describe('measurement actions', () => {
  const parameter = 'measurement';
  const category = 'category';
  const user = 'user';

  it('should create a measurement', () => {
    const expectedAction = {
      type: 'ADD_MEASURES',
      payload: parameter,
    };
    expect(reducerAction.addMeasurements(parameter)).toEqual(expectedAction);
  });

  it('should get all measurements', () => {
    const expectedAction = {
      type: 'GET_MEASUREMENTS',
      payload: parameter,
    };
    expect(reducerAction.getMeasurements(parameter)).toEqual(expectedAction);
  });

  it('should create a unique measurement', () => {
    const expectedAction = {
      type: 'GET_MEASURES',
      payload: parameter,
    };
    expect(reducerAction.getMeasuresId(parameter)).toEqual(expectedAction);
  });

  it('should create a unique measurement', () => {
    const expectedAction = {
      type: 'GET_CATEGORIES',
      payload: category,
    };
    expect(reducerAction.getCategories(category)).toEqual(expectedAction);
  });

  it('should create a unique measurement', () => {
    const expectedAction = {
      type: 'LOGIN_USER',
      payload: user,
    };
    expect(reducerAction.loginUser(user)).toEqual(expectedAction);
  });
});
