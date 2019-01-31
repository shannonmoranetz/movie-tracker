import { postData } from './api';

export const createUser = async (name, email, password) => {
  try {
    return await postData('/new', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error creating user: ' + error.message);
  }
}

export const loginUser = async (email, password) => {
  try {
    return await postData('', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error logging in: ' + error.message);
  }
}

export const postFavorite = async (movie) => {
  try {
    return await postData('/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error adding favorite: ' + error.message);
  }
}

export const deleteFavorite = async (user_id, movie_id) => {
  try {
    return await postData(`/${user_id}/favorites/${movie_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ user_id, movie_id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    throw Error('Error deleting favorite: ' + error.message);
  }
}