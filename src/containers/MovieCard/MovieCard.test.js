import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard }  from './MovieCard';

const mockProps = { 
  title: 'frozen',
  poster_path: 'url/imgur',
  currentUser: { id: 1, name: 'shannon' },
  favorite: true,
  id: 123456
}

describe('MovieCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieCard {...mockProps}/>
    );
  });

  describe('MovieCard container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should call handleClick when a movie image is clicked', () => {
      wrapper.instance().handleClick = jest.fn();
      wrapper.update();
      wrapper.find('.favorite-button').simulate('click');
      expect(wrapper.instance().handleClick).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});
  
});