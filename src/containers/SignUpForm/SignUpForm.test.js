import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

const checkEmailRegexMock = jest.fn();
const handleSubmitMock = jest.fn();
const handleChangeMock = jest.fn();
const getNameAndEmailInputFieldsMock = jest.fn();

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignUpForm checkEmailRegex={checkEmailRegexMock}
                  handleSubmit={handleSubmitMock}
                  handleChange={handleChangeMock}
                  getNameAndEmailInputFields={getNameAndEmailInputFieldsMock} />
    );
  });
  
  describe('SignUpForm container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({
        name: '',
        email: '',
        passwordOriginal: '',
        passwordConfirmed: '',
        status: ''
      })
    })
  
    it.skip('should set state based on an input field value when handleChange is invoked', () => {
      const event = {target: {id: 'name', value: 'shannon'}};
      wrapper.find('.name-input').simulate('change', event);
      expect(wrapper.state()).toEqual({ name: 'shannon' });
    });
    
    it.skip('should evaluate true if password state values are equal when checkMatchingPassword is invoked', () => {
      const mockPasswordMatch = wrapper.instance().checkMatchingPassword();
      expect(mockPasswordMatch).toEqual(true);
    });
    
    it.skip('should call test with the correct parameters when checkEmailRegex is invoked', () => {
      const mockEmail = 'email@test.io';
      wrapper.instance().checkMatchingPassword(mockEmail);
      expect(checkEmailRegexMock).toBeCalledWith(mockEmail);
    });
  
    it.skip('should call handleSubmit when form is submitted', () => {
      wrapper.find('form').simulate('submit');
      expect(handleSubmitMock).toBeCalled();
    });
    
    it.skip('should call handleChange on input fields change ', () => {
      wrapper.find('.password-original-input').simulate('change');
      expect(handleChangeMock).toBeCalled();
    });
    
    it.skip('should call getNameAndEmailInputFields every render', () => {
      wrapper.update();
      expect(getNameAndEmailInputFieldsMock).toBeCalled();
    });
  });

  describe('mapDispatchToProps', () => {});

});