import React from 'react';
import { shallow } from 'enzyme';
import { LoginPrompt, mapDispatchToProps } from './LoginPrompt.js';
import { toggleLoginPrompt } from '../../actions';

describe('LoginPrompt', () => {
  let wrapper;
  const toggleLoginPromptMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <LoginPrompt toggleLoginPrompt={toggleLoginPromptMock} />
    );
  });

  describe('LoginPrompt component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleLoginPrompt with false when the close button is clicked', () => {
      wrapper.find('.close-button').simulate('click');
      expect(toggleLoginPromptMock).toHaveBeenCalledWith(false);
    });
    
    it('should call toggleLoginPrompt with false when the sign up button is clicked', () => {
      wrapper.find('.signupprompt-button').simulate('click');
      expect(toggleLoginPromptMock).toHaveBeenCalledWith(false);
    });
    
    it('should call toggleLoginPrompt with false when the login button is clicked', () => {
      wrapper.find('.loginprompt-button').simulate('click');
      expect(toggleLoginPromptMock).toHaveBeenCalledWith(false);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the action toggleLoginPrompt', () => {
      const expectedAction = toggleLoginPrompt(true);
      const dispatchMock = jest.fn();
      const props = mapDispatchToProps(dispatchMock);
      props.toggleLoginPrompt(true);
      expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
  });
});
