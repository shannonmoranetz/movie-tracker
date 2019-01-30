export const addMovie = (movie) => ({
  type: 'ADD_MOVIE',
  movie
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});