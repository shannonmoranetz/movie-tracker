import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapDispatchToProps } from './SignUpForm';
import { setUser } from '../../actions';

const mockProps = {
  history: {},
  location: {},
  match: {},
  setUser: jest.fn()
}

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignUpForm {...mockProps} />
    );
  });
  
  describe('SignUpForm container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({
        name: '',
        email: '',
        passwordOriginal: '',
        passwordConfirmed: '',
        status: ''
      })
    })
  
    it('should set state based on an input field when text is typed', () => {
      const event = {target: {id: 'name', value: 'shannon'}};
      wrapper.find('#name').simulate('change', event);
      expect(wrapper.state('name')).toEqual('shannon');
    });
    
    it('should return true when passwords match', () => {
      const mockPasswordMatch = wrapper.instance().checkMatchingPassword();
      expect(mockPasswordMatch).toEqual(true);
    });

    it('should return false when passwords do not match', () => {
      const event = {target: {id: 'passwordOriginal', value: 'password123'}};
      wrapper.find('#passwordOriginal').simulate('change', event);
      const mockPasswordMatch = wrapper.instance().checkMatchingPassword();
      expect(mockPasswordMatch).toEqual(false);
    });
    
    it('should return true when a user enters a valid email', () => {
      const mockEmail = 'valid@test.io';
      const result = wrapper.instance().checkEmailRegex(mockEmail);
      expect(result).toEqual(true);
    });

    it('should return false when a user enters a invalid email', () => {
      const mockEmail = 'invalid-email';
      const result = wrapper.instance().checkEmailRegex(mockEmail);
      expect(result).toEqual(false);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setUser is called', () => {
      const dispatchMock = jest.fn();
      const expected = setUser({ id: 1, name: 'Jeo' });
      const result = mapDispatchToProps(dispatchMock);
      result.setUser({ id: 1, name: 'Jeo' });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});