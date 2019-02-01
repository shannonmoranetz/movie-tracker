import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails from './MovieDetails.js';

describe('MovieDetails', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieDetails />
    );
  });

  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
