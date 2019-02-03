import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapDispatchToProps } from './SignUpForm';
import { createUser } from '../../thunks/createUser';

const mockProps = {
  history: {},
  location: {},
  match: {},
  setUser: jest.fn(),
  createUser: jest.fn(() => 'success')
}

jest.mock('../../thunks/createUser.js');

describe('SignUpForm', () => {
  let wrapper;
  const mockEvent = { preventDefault: jest.fn() };
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
      });
    });
  
    it('should set state based on an input field when text is typed', () => {
      const event = {target: {id: 'name', value: 'shannon'}};
      wrapper.find('#name').simulate('change', event);
      expect(wrapper.state('name')).toEqual('shannon');
    });

    it('should set state of status when handleSubmit is called', async () => {
      wrapper.setState({ email: 'email@test.io' });
      await wrapper.find('.SignUpForm').simulate('submit', mockEvent);
      expect(wrapper.state('status')).toEqual('success');
    });

    it('should call createUser with the correct params', async () => {
      await wrapper.find('.SignUpForm').simulate('submit', mockEvent);
      expect(mockProps.createUser).toHaveBeenCalledWith('', 'email@test.io', '');
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
    it('should call dispatch when createUser is called', () => {
      const dispatchMock = jest.fn();
      const props = mapDispatchToProps(dispatchMock);
      const expected = createUser('shannon', 'email', 'pass');
      props.createUser('shannon', 'email', 'pass');
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});