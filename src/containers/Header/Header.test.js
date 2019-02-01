import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });

  describe('Header container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('handleClick should call setUser and setFavorites', () => {});
  
    it.skip('should call handleClick upon clicking clicking the homepage Link element', () => {});
  });

  describe('mapStateToProps', () => {});

  describe('mapDispatchToProps', () => {});

});