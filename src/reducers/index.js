import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer';
import { displayPromptReducer } from './displayPromptReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  favorites: favoritesReducer,
  displayPrompt: displayPromptReducer
});

export default rootReducer;