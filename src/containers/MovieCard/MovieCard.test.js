import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

const handleClickMock = jest.fn();

describe('MovieCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieCard handleClick={handleClickMock}/>
    );
  });

  describe('MovieCard container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('should call handleClick when a movie image is clicked', () => {
      wrapper.find('.favorite-button').simulate('click');
      expect(handleClickMock).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});
  
});