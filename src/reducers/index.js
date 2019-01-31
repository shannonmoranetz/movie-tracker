import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { currentUserReducer } from './currentUserReducer';
import { favoritesReducer } from './favoritesReducer';
import { showLoginPromptReducer } from './showLoginPromptReducer';
import { currentMovieReducer } from './currentMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  currentUser: currentUserReducer,
  favorites: favoritesReducer,
  showLoginPrompt: showLoginPromptReducer,
  currentMovie: currentMovieReducer
});

export default rootReducer;