import { favoritesReducer } from '../favoritesReducer';
import * as actions from '../../actions/index';

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state with favorited movie Ids', () => {
    const mockMovieId = 123456;
    const expected = [mockMovieId];
    const result = favoritesReducer(undefined, actions.setFavorites([mockMovieId]));
    expect(result).toEqual(expected);
  });
});