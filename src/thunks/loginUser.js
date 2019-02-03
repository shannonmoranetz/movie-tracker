import { fetchData } from '../utils/api';
import { setUser, toggleLoginPrompt } from '../actions';
import { getFavorites } from './getFavorites';

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const loginUrl = 'http://localhost:3000/api/users';
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetchData(loginUrl, options);
      const { name, id } = response.data;
      dispatch(setUser({ name, id }));
      await dispatch(getFavorites(id));
      dispatch(toggleLoginPrompt(false));
      localStorage.setItem('user', JSON.stringify({ name, id }));
      return response.status;
    } catch {
      return 'error';
    }
  }
}