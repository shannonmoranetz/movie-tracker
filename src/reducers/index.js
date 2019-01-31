import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { currentUserReducer } from './currentUserReducer';
import { favoritesReducer } from './favoritesReducer';
import { showLoginPromptReducer } from './showLoginPromptReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  currentUser: currentUserReducer,
  favorites: favoritesReducer,
  showLoginPrompt: showLoginPromptReducer
});

export default rootReducer;