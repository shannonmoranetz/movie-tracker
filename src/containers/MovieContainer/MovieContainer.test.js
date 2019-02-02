import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer, mapStateToProps } from './MovieContainer';

const mockProps = {
  movies: [{ id: 1, favorite: false }, { id: 2, favorite: true }],
  dispatch: jest.fn(),
  favorites: [123456],
  match: { path: '/' },
  showLoginPrompt: false
}

describe('MovieContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer {...mockProps} />
    );
  });

  describe('MovieContainer container', () => {
    it('should match snapshot when path is / and showLoginPrompt is false', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it(`should return an object with a movies array, a favorites array,
    and a showLoginPrompt boolean`, () => {
      const mockMovies = [
        { id: 123456, title: 'Creed II' },
        { id: 234567, title: 'A Star is Born' },
        { id: 345678, title: 'Aquaman' }
      ];
      const mockFavorites = [123456, 234567];
      const mockState = {
        movies: mockMovies,
        user: { id: 1, name: 'Jeo' },
        favorites: mockFavorites,
        showLoginPrompt: false
      }
      const expected = {
        movies: mockMovies,
        favorites: mockFavorites,
        showLoginPrompt: false
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });
});