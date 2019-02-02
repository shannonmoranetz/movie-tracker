import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPrompt from '../../components/LoginPrompt/LoginPrompt';
import MovieCard from '../../containers/MovieCard/MovieCard';

export class MovieContainer extends Component {
  getMoviesToDisplay = (movies) => {
    const { favorites } = this.props;
    return movies.map(movie => {
      if (favorites.includes(movie.id)) {
        return <MovieCard key={movie.id} {...movie} favorite={true} />
      }
      return <MovieCard key={movie.id} {...movie} favorite={false} />
    });
  }
  
  render() {
    const { movies, favorites, match, showLoginPrompt } = this.props;
    const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
    return (
      <div className="MovieContainer">
        {showLoginPrompt && <LoginPrompt />}
        {match.path === '/' && this.getMoviesToDisplay(movies)}
        {match.path === '/favorites' && this.getMoviesToDisplay(favoriteMovies)}
        {match.path === '/favorites' && favorites.length === 0 &&
          <p>There are no favorites to display.</p>}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites,
  showLoginPrompt: state.showLoginPrompt
});

export default connect(mapStateToProps)(MovieContainer);

MovieContainer.propTypes = {
  dispatch: PropTypes.func,
  favorites: PropTypes.array,
  match: PropTypes.object,
  movies: PropTypes.array,
  showLoginPrompt: PropTypes.bool
};