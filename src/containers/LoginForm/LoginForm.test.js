import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LoginForm />
    );
  });

  describe('LoginForm container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({
        email: '',
        password: '',
        status: ''
      })
    })
  
    it.skip('handleChange should set state of input fields in state', () => {});
    
    it.skip('should call handleSubmit when form is submitted', () => {});
    
    it.skip('should call handleChange on input fields change ', () => {});
  });

  describe('mapDispatchToProps', () => {});
  
});