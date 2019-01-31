export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const getFavorites = (favorites) => ({
  type: 'GET_FAVORITES',
  favorites
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});