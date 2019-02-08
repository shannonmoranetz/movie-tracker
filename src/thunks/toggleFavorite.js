import { getFavorites } from './getFavorites';
import { fetchData } from '../utils/api';

export const toggleFavorite = (movie, isFavorite) => {
  return async (dispatch) => {
    const { user_id, movie_id } = movie;
    if (isFavorite) {
      const url = `https://movie-tracker-jd.herokuapp.com/api/users/${user_id}/favorites/${movie_id}`;
      const options = {
        method: 'DELETE',
        body: JSON.stringify({ user_id, movie_id }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await fetchData(url, options);
    } else {
      const url = 'https://movie-tracker-jd.herokuapp.com/api/users/favorites/new';
      const options = {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await fetchData(url, options);
    }
    dispatch(getFavorites(user_id));
  }
}