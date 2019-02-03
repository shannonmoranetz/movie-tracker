import React from 'react';
import { shallow } from 'enzyme';
import { LoginPrompt, mapDispatchToProps } from './LoginPrompt.js';
import { toggleLoginPrompt } from '../../actions';

describe('LoginPrompt', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LoginPrompt />
    );
  });

  describe('LoginPrompt component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
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
