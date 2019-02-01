import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer />
    );
  });

  describe('MovieContainer container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('getMoviesToDisplay should return all matching movies', () => {
      const mockMovies = [{id: 1, favorite: false}];
      const expected = wrapper.instance().getMoviesToDisplay(mockMovies);
      expect(mockMovies).toMatchObject(expected);
    });
  
    it.skip('getMoviesToDisplay should return all matching favorite movies by their id', () => {
      const mockMovies = [{id: 1, favorite: false}, {id: 2, favorite: true}];
      const expected = wrapper.instance().getMoviesToDisplay(mockMovies);
      expect(mockMovies).toMatchObject(expected);
    });
  });

  describe('mapStateToProps', () => {});
  
});