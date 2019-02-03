import { createUser } from '../createUser';
import { loginUser } from '../loginUser';
import * as api from '../../utils/api';

jest.mock('../loginUser');

describe('createUser thunk', () => {
  let dispatchMock;
  beforeEach(() => {
    dispatchMock = jest.fn();
  });

  it('should call dispatch with the loginUser thunk', async () => {
    api.fetchData = jest.fn();
    const thunk = createUser('shannon', 'email', 'pass');
    await thunk(dispatchMock);
    expect(dispatchMock).toHaveBeenCalledWith(loginUser('email', 'pass'))
  })

  it('should return the string of success if no errors are found', async () => {
    api.fetchData = jest.fn(() => ({ status: 'success' }));
    const thunk = createUser('shannon', 'email', 'pass');
    const result = await thunk(dispatchMock);
    expect(result).toEqual('success');
  })

  it('should return the string of an error if errors are found', async () => {
    api.fetchData = jest.fn(() => {
      throw Error('new')
    });
    const thunk = createUser('shannon', 'email', 'pass');
    const result = await thunk(dispatchMock);
    expect(result).toEqual('error');
  })

})