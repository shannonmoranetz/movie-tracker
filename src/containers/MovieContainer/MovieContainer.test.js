import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer } from './MovieContainer';

const mockProps = {
  movies: [{ id: 1, favorite: false }, { id: 2, favorite: true }],
  dispatch: jest.fn(),
  favorites: [123456],
  match: { path: '/' },
  showLoginPrompt: false
}

describe('MovieContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer {...mockProps} />
    );
  });

  describe('MovieContainer container', () => {
    it('should match snapshot when path is / and showLoginPrompt is false', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {});
});