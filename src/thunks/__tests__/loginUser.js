import { loginUser } from '../loginUser';
import { getFavorites } from '../getFavorites';
import { setUser, toggleLoginPrompt } from '../../actions';
import * as api from '../../utils/api';

jest.mock('../getFavorites');

describe('loginUser thunk', () => {
  let dispatchMock;
  const mockUser = { name: 'shan', id: 1 };
  const thunk = loginUser('email', 'pass');
  beforeEach(() => {
    api.fetchData = jest.fn(() => ({ data: mockUser }));
    dispatchMock = jest.fn();
  });
  
  it('should call dispatch with the getFavorites action', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(getFavorites(1));
  });

  it('should call dispatch with the setUser action', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(setUser(mockUser));
  });
  
  it('should call dispatch with the toggleLoginPrompt action', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(toggleLoginPrompt(false));
  });

  it('should return the string of success if no errors are found', async () => {
    api.fetchData = jest.fn(() => ({ data: mockUser, status: 'success' }));
    const result = await thunk(dispatchMock);
    expect(result).toEqual('success');
  });
  
  it('should return the string of an error if errors are found', async () => {
    api.fetchData = jest.fn(() => {
      throw Error('some error')
    });
    const result = await thunk(dispatchMock);
    expect(result).toEqual('error');
  });
});