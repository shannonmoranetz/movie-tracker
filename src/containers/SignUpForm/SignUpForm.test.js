import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignUpForm />
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
  
    it.skip('handleChange should set state of input fields in state', () => {});
    
    it.skip('checkMatchingPassword should return true if password state values are equal', () => {});
    
    it.skip('checkEmailRegex should call test with the correct parameters', () => {});
  
    it.skip('should call handleSubmit when form is submitted', () => {});
    
    it.skip('should call handleChange on input fields change ', () => {});
    
    it.skip('should call getNameAndEmailInputFields on  ', () => {});
  });

  describe('mapDispatchToProps', () => {});

});