import { getFavorites } from '../getFavorites';
import { setFavorites } from '../../actions';
import * as api from '../../utils/api';

describe('getFavorites thunk', () => {  
  it('should call dispatch', async () => {
    const mockFavorites = [{ movie_id: 123456 }, { movie_id: 234567 }];
    let dispatchMock = jest.fn();
    api.fetchData = jest.fn(() => {
      return { data: mockFavorites };
    });
    const thunk = getFavorites(1);
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setFavorites([123456, 234567]));
  });
});