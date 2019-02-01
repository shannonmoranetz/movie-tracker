import { currentUserReducer } from '../currentUserReducer';
import * as actions from '../../actions/index';

describe('currentUserReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = currentUserReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with the current user', () => {
    const name = 'shannon';
    const id = 1;
    const expected = [{name, id}];
    const result = currentUserReducer(undefined, actions.setUser([{name, id}]));
    expect(result).toEqual(expected);
  });
});