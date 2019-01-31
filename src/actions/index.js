export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  favorites
});

export const toggleLoginPrompt = (validity) => ({
  type: 'TOGGLE_LOGIN_PROMPT',
  validity
});