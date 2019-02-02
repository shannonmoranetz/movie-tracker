import { addMovies } from '../actions';
import { fetchData } from '../utils/api';

export const fetchMovies = (url) => {
  return async (dispatch) => {
    const data = await fetchData(url);
    dispatch(addMovies(data.results));
  }
}