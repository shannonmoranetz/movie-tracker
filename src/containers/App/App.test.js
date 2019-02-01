import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  describe('App container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});
  
});
