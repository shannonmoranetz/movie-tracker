import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../containers/MovieCard/MovieCard';
import Header from '../../containers/Header/Header';
import LoginPrompt from '../../components/LoginPrompt/LoginPrompt';
import PropTypes from 'prop-types';

const MovieContainer = ({ movies, favorites, match, showLoginPrompt }) => {
  const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
  return (
    <div className="MovieContainer">
      <Header />
      {
        match.path === '/' &&
          movies.map(movie => {
            if (favorites.includes(movie.id)) {
              return <MovieCard key={movie.id} {...movie} favorite={true} />
            }
            return <MovieCard key={movie.id} {...movie} favorite={false} />
          })
      }
      {
        showLoginPrompt && <LoginPrompt />
      }
      {
        match.path === '/favorites' && favorites.length > 0 &&
        favoriteMovies.map(movie => {
          if (favorites.includes(movie.id)) {
            return <MovieCard key={movie.id} {...movie} favorite={true} />
          }
          return <MovieCard key={movie.id} {...movie} favorite={false} />
        })
      }
      {
        match.path === '/favorites' && favorites.length === 0 &&
        <p>There are no favorites to display.</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites,
  showLoginPrompt: state.showLoginPrompt
})

export default connect(mapStateToProps)(MovieContainer);

MovieContainer.propTypes = {
  dispatch: PropTypes.func,
  favorites: PropTypes.array,
  match: PropTypes.object,
  movies: PropTypes.array,
  showLoginPrompt: PropTypes.bool
};