import { getFavorites } from '../getFavorites';
import { setFavorites } from '../../actions';
import * as api from '../../utils/api';

describe('getFavorites thunk', () => {  
  const mockFavorites = [{ movie_id: 123456 }, { movie_id: 234567 }];
  let dispatchMock = jest.fn();
  api.fetchData = jest.fn(() => {
    return { data: mockFavorites };
  });
  const thunk = getFavorites(1);
  
  beforeEach(async () => {
    await thunk(dispatchMock);
  });

  it('should call dispatch', () => {
    expect(dispatchMock).toHaveBeenCalledWith(setFavorites([123456, 234567]));
  });
  
  it('should set favorites in localStorage', () => {
    const expected = JSON.stringify([123456, 234567]);
    expect(localStorage.getItem('favorites')).toEqual(expected);
  });
});