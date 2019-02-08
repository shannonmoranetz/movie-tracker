import { fetchData } from '../utils/api';
import { loginUser } from './loginUser';

export const createUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      const url = 'https://movie-tracker-jd.herokuapp.com/api/users/new';
      const options = {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetchData(url, options);
      await dispatch(loginUser(email, password));
      return response.status;
    } catch {
      return 'error';
    }
  }
}