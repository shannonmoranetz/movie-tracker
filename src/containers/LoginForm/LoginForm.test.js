import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { setUser, setFavorites, toggleLoginPrompt } from '../../actions';

const mockProps = {
  setFavorites: jest.fn(),
  setUser: jest.fn(),
  toggleLoginPrompt: jest.fn(),
  history: {},
  location: {},
  match: {}
}

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LoginForm {...mockProps} />
    );
  });

  describe('LoginForm container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({
        email: '',
        password: '',
        status: ''
      });
    });
  
    it('should set state based on an input field when text is typed', () => {
      const event = {target: {id: 'email', value: 'shannon'}};
      wrapper.find('#email').simulate('change', event);
      expect(wrapper.state('email')).toEqual('shannon');
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

    it('should call dispatch when toggleLoginPrompt is called', () => {
      const expected = toggleLoginPrompt(true);
      result.toggleLoginPrompt(true);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });


  });
  
});