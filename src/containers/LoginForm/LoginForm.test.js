import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { loginUser } from '../../thunks/loginUser';

const mockProps = {
  loginUser: jest.fn(),
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
    it.skip('should call dispatch when loginUser is called', () => {
      let dispatchMock = jest.fn();
      const expected = loginUser('email@test.io', 'shannon');
      const result = mapDispatchToProps(dispatchMock);
      result.loginUser('email@test.io', 'shannon');
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
  
});