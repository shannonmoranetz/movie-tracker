import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { setUser, setFavorites } from '../../actions';

const setUserMock = jest.fn();
const setFavoritesMock = jest.fn();
let mockCurrentUser = { name: 'shannon' }

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NavBar 
        setUser={setUserMock} 
        setFavorites={setFavoritesMock} 
        currentUser={mockCurrentUser} 
      />
    );
  });

  describe('NavBar container', () => {
    it('should match the snapshot when the user is not logged in', () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should call setUser and setFavorites when handleClick is invoked', () => {
      wrapper.find('.logout-link').simulate('click');
      expect(setUserMock).toBeCalled();
      expect(setFavoritesMock).toBeCalled();
    });

    it('should match the snapshot when the user is not logged in', () => {
      mockCurrentUser = {};
      wrapper = shallow(
        <NavBar 
          setUser={setUserMock} 
          setFavorites={setFavoritesMock} 
          currentUser={mockCurrentUser} 
        />
      );
      expect(wrapper).toMatchSnapshot();
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

    it('should call dispatch when setUser is called', () => {
      const expected = setUser({ id: 1, name: 'Jeo' });
      result.setUser({ id: 1, name: 'Jeo' });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch when setFavorites is called', () => {
      const expected = setFavorites([123456, 234567]);
      result.setFavorites([123456, 234567]);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});