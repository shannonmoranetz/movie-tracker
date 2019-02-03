import { toggleFavorite } from '../toggleFavorite';
import * as api from '../../utils/api';
import { getFavorites } from '../getFavorites';

jest.mock('../getFavorites');

describe('toggleFavorite thunk', () => {
  it('should call dispatch with the getFavorites thunk', async () => {
    const mockMovie = { user_id: 1, movie_id: 123456 };
    const dispatchMock = jest.fn();
    const thunk = toggleFavorite(mockMovie, true);
    api.fetchData = jest.fn();
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(getFavorites(1));
  });
});