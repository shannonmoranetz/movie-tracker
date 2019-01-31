import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../containers/MovieCard/MovieCard';
import Header from '../../containers/Header/Header';
import LoginPrompt from '../../components/LoginPrompt/LoginPrompt';

const MovieContainer = ({ movies, favorites, match, displayPrompt }) => {
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
        displayPrompt && <LoginPrompt />
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