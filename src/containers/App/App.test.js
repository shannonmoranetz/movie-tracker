import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchMovies } from '../../thunks/fetchMovies';

const fetchMoviesMock = jest.fn();
jest.mock('../../thunks/fetchMovies.js')

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App fetchMovies={fetchMoviesMock} />
    );
  });

  describe('App container', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call fetchMovies on componentDidMount', () => {
      wrapper.instance().componentDidMount();
      expect(fetchMoviesMock).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it(`should return an object with a movies array`, () => {
      const mockMovies = [
        { id: 234567, title: 'A Star is Born' },
        { id: 345678, title: 'Spider-Man' },
        { id: 456789, title: 'Bumblebee' }
      ]
      const mockState = {
        movies: mockMovies,
        currentUser: { id: 1, name: 'Jeo' },
        favorites: [345678],
        showLoginPrompt: false
      }
      const expected = { movies: mockMovies };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it ('should call dispatch with fetchMovies as a param', () => {
      const dispatchMock = jest.fn();
      const props = mapDispatchToProps(dispatchMock);
      const expected = fetchMovies('google.com');
      props.fetchMovies('google.com');
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});
