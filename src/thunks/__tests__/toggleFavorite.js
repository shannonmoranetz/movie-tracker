import { toggleFavorite } from '../toggleFavorite';
import * as api from '../../utils/api';
import { getFavorites } from '../getFavorites';

jest.mock('../getFavorites');

describe('toggleFavorite thunk', () => {
  const mockMovie = { user_id: 1, movie_id: 123456 };
  const dispatchMock = jest.fn();
  api.fetchData = jest.fn();
  
  it('should call dispatch with the getFavorites thunk', async () => {
    const thunk = toggleFavorite(mockMovie, true);
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(getFavorites(1));
  });
  
  it('should call fetch data with the correct params when a movie is a favorite', async () => {
    const expectedURL = 'https://movie-tracker-jd.herokuapp.com/api/users/1/favorites/123456';
    const expectedOptions = {
      method: 'DELETE',
      body: JSON.stringify({ user_id: 1, movie_id: 123456 }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const thunk = toggleFavorite(mockMovie, true);
    await thunk(dispatchMock);
    expect(api.fetchData).toHaveBeenCalledWith(expectedURL, expectedOptions);
  });

  it('should call fetch data with the correct params when a movie is not a favorite', async () => {
    const expectedURL = 'https://movie-tracker-jd.herokuapp.com/api/users/favorites/new';
    const expectedOptions = {
      method: 'POST',
      body: JSON.stringify(mockMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const thunk = toggleFavorite(mockMovie, false);
    await thunk(dispatchMock);
    expect(api.fetchData).toHaveBeenCalledWith(expectedURL, expectedOptions);
  });
});