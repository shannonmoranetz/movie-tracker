import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

const handleSubmitMock = jest.fn();
const handleChangeMock = jest.fn();

describe('LoginForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LoginForm handleSubmit={handleSubmitMock}
                 handleChange={handleChangeMock} />
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
      });
    });
  
    it.skip('handleChange should set state of input fields in state', () => {
      const event = {target: {id: 'email', value: 'email@test.io'}};
      wrapper.find('.email-input').simulate('change', event);
      expect(wrapper.state()).toEqual({ email: 'email@test.io' });
    });
    
    it.skip('should call handleSubmit when form is submitted', () => {
      wrapper.find('.login-form').simulate('submit');
      expect(handleSubmitMock).toBeCalled();
    });
    
    it.skip('should call handleChange when a form input field changes ', () => {
      wrapper.find('.email-input').simulate('change');
      expect(handleChangeMock).toBeCalled();
    });
  });

  describe('mapDispatchToProps', () => {});
  
});