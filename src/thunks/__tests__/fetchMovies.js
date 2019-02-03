import { fetchMovies } from '../fetchMovies';
import * as api from '../../utils/api';

describe('fetchMovies thunk', () => {
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = jest.fn();
  })
  it('should call dispatch with the addMovies action', async () => {
    const mockURL = 'google.com';
    api.fetchData = jest.fn(() => {
      return { results: { title: 'Aquaman' }, type: 'ADD_MOVIES' };
    })
    const thunk = fetchMovies(mockURL);
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith({movies: { title: 'Aquaman' }, type: 'ADD_MOVIES'})
  })
});