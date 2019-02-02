import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setUser, setFavorites} from '../../actions';

const setUserMock = jest.fn();
const setFavoritesMock = jest.fn();
let mockCurrentUser = { name: 'shannon' }

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header 
        setUser={setUserMock} 
        setFavorites={setFavoritesMock} 
        currentUser={mockCurrentUser} 
      />
    );
  });

  describe('Header container', () => {
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
        <Header 
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

  });
});