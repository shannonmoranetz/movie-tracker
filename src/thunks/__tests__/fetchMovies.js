import { fetchMovies } from '../fetchMovies';
import * as api from '../../utils/api';

describe('fetchMovies thunk', () => {
  it('should call dispatch with the addMovies action', async () => {
    let dispatchMock = jest.fn();
    const mockURL = 'google.com';
    api.fetchData = jest.fn(() => {
      return { results: { title: 'Aquaman' }, type: 'ADD_MOVIES' };
    });
    const thunk = fetchMovies(mockURL);
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({movies: { title: 'Aquaman' }, type: 'ADD_MOVIES'});
  });
});