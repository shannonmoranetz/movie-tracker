import * as actions from './index'

describe('actions', () => {
  it('should return a type of ADD_MOVIES, with a collection of movies', () => {
    const movies = [{ title: 'frozen', id: 123456 }];
    const expected = {
      type: 'ADD_MOVIES',
      movies
    };
    const result = actions.addMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_USER, with a user', () => {
    const user = { name: 'shannon', id: 1 };
    const expected = {
      type: 'SET_USER',
      user
    };
    const result = actions.setUser(user);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_FAVORITES, with a collection of favorited movie Ids', () => {
    const favorites = [123456];
    const expected = {
      type: 'SET_FAVORITES',
      favorites
    };
    const result = actions.setFavorites(favorites);
    expect(result).toEqual(expected);
  });

  it('should return a type of TOGGLE_LOGIN_PROMPT, with a validity value', () => {
    const validity = false;
    const expected = {
      type: 'TOGGLE_LOGIN_PROMPT',
      validity
    };
    const result = actions.toggleLoginPrompt(validity);
    expect(result).toEqual(expected);
  });
});
