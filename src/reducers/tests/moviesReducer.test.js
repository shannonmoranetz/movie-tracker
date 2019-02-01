import { moviesReducer } from '../moviesReducer';
import * as actions from '../../actions/index';

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state with all movie objects', () => {
    const title = 'frozen';
    const id = 1;
    const mockMovie = {title, id};
    const expected = [mockMovie];
    const result = moviesReducer(undefined, actions.addMovies([mockMovie]));
    expect(result).toEqual(expected);
  });
});