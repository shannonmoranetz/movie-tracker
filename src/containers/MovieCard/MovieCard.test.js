import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieCard />
    );
  });

  describe('MovieCard container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('should call handleClick when a movie image is clicked', () => {});
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});
  
});