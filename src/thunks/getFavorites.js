import { setFavorites } from '../actions';
import { fetchData } from '../utils/api';

export const getFavorites = (userID) => {
  return async (dispatch) => {
    const favesUrl = `https://movie-tracker-jd.herokuapp.com/api/users/${userID}/favorites`;
    const response = await fetchData(favesUrl);
    const favorites = response.data.map(favorite => favorite.movie_id);
    dispatch(setFavorites(favorites));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}