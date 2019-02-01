import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

const setUserMock = jest.fn();
const setFavoritesMock = jest.fn();
const mockCurrentUser = { name: 'shannon' }
const handleClickMock = jest.fn();

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header setUser={setUserMock} 
              setFavorites={setFavoritesMock} 
              currentUser={mockCurrentUser}/>
    );
  });

  describe('Header container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should call setUser and setFavorites when handleClick is invoked', () => {
      wrapper.instance().handleClick();
      expect(setUserMock).toBeCalled();
      expect(setFavoritesMock).toBeCalled();
    });
  
    it.skip('should call handleClick upon clicking clicking the homepage Link element', () => {
      wrapper.find('.home-link').simulate('click');
      expect(handleClickMock).toBeCalled();
    });
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});

});