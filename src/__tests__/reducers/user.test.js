import userReducer from '../../redux/reducers/userReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get and add measurements', () => {
  const initialState = {
    currentUser: {},
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, {
      type: reducerAction.loginUser,
    })).toEqual(initialState);
  });
});
