import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps }  from './MovieCard';
import { setFavorites, toggleLoginPrompt } from '../../actions';

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
      wrapper.find('.moviecard-favorite').simulate('click');
      expect(wrapper.instance().handleClick).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {
    it(`should return an object with a currentUser object`, () => {
      const mockState = {
        movies: [{ id: 234567, title: 'A Star is Born' }],
        currentUser: { id: 1, name: 'Jeo' },
        favorites: [],
        showLoginPrompt: false
      }
      const expected = { currentUser: { id: 1, name: 'Jeo' } };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatchMock = jest.fn()
    const result = mapDispatchToProps(dispatchMock);

    it('should call dispatch when toggleLoginPrompt is called', () => {
      const expected = toggleLoginPrompt(false);
      result.toggleLoginPrompt(false);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});