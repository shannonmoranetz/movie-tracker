import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchMovies } from '../../thunks/fetchMovies';
import { setUser, setFavorites } from '../../actions';

const fetchMoviesMock = jest.fn();
jest.mock('../../thunks/fetchMovies.js')

describe('App', () => {
  let wrapper;
  let setUserMock = jest.fn();
  let setFavoritesMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <App
        fetchMovies={fetchMoviesMock}
        setUser={setUserMock}
        setFavorites={setFavoritesMock}
      />
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

    it('should get call setUser if there is a user in localStorage', () => {
      localStorage.setItem('user', JSON.stringify({ id: 1, name: 'jeo' }));
      wrapper.instance().getLocalStorage();
      expect(setUserMock).toHaveBeenCalledWith({ id: 1, name: 'jeo' });
    });

    it('should get call setFavorites if there are favorites in localStorage', () => {
      localStorage.setItem('favorites', JSON.stringify([123456]));
      wrapper.instance().getLocalStorage();
      expect(setFavoritesMock).toHaveBeenCalledWith([123456]);
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
    const dispatchMock = jest.fn();
    const props = mapDispatchToProps(dispatchMock);

    it ('should call dispatch with fetchMovies as a param', () => {
      const expected = fetchMovies('google.com');
      props.fetchMovies('google.com');
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch when setUser is called', () => {
      const expected = setUser({ id: 1, name: 'Jeo' });
      props.setUser({ id: 1, name: 'Jeo' });
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch when setFavorites is called', () => {
      const expected = setFavorites([123456, 234567]);
      props.setFavorites([123456, 234567]);
      expect(dispatchMock).toHaveBeenCalledWith(expected);
    });
  });
});
