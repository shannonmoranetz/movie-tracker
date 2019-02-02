import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { addMovies } from '../../actions';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  describe('App container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it(`should return an object with a movies array`, () => {
      const mockMovies = [
        { id: 234567, title: 'A Star is Born' },
        { id: 345678, title: 'Spider-Man' },
        { id: 456789, title: 'Bumblebee' }
      ]
      const mockState = {
        movies: mockMovies,
        currentUser: { id: 1, name: 'Jeo' },
        favorites: [345678],
        showLoginPrompt: false
      }
      const expected = { movies: mockMovies };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

  });
});
