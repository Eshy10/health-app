import measureCategoryReducer from '../../redux/reducers/measureCategoryReducer';
import * as reducerAction from '../../redux/actions/index';

describe('get measure categories', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(measureCategoryReducer(undefined, {
      type: reducerAction.getCategories,
    })).toEqual(initialState);
  });
});
