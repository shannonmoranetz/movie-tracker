import { loginUser } from '../loginUser';
import { getFavorites } from '../getFavorites';
import { setUser, toggleLoginPrompt } from '../../actions';
import * as api from '../../utils/api';

jest.mock('../getFavorites');

describe('loginUser thunk', () => {
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = jest.fn();
  });
  
  it('should call dispatch with the getFavorites action', async () => {
    api.fetchData = jest.fn(() => ({ data: { name: 'shan', id: 1 } }));
    const thunk = loginUser('email', 'pass');
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(getFavorites(1));
  });

  it('should return the string of success if no errors are found', async () => {
  });

  it('should return the string of an error if errors are found', async () => {
  });
});