import React from 'react';
import { shallow } from 'enzyme';
import LoginPrompt from './LoginPrompt.js';

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
});
