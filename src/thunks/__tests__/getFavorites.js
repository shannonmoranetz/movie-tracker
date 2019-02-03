import { getFavorites } from '../getFavorites';
import { loginUser } from '../loginUser';
import * as api from '../../utils/api';

// jest.mock('../loginUser');

describe('getFavorites thunk', () => {
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = jest.fn();
  })
  
  it.skip('should call dispatch', async () => {
      api.fetchData = jest.fn(() => {
      return { results: { 'name': 'shannon', 'id': 1 }};
    })
    const thunk = getFavorites(1);
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(loginUser(1))
  })
})