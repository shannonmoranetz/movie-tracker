export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  favorites
});

export const toggleLoginPrompt = () => ({
  type: 'TOGGLE_LOGIN_PROMPT'
});