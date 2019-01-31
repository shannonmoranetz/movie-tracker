import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../containers/Header/Header';

const MovieContainer = ({ movies, favorites, match }) => {
  console.log(favorites)
  return (
    <div className="MovieContainer">
      <Header />
      {
        match.path === '/' &&
          movies.map(movie => {
            return <MovieCard key={movie.id} {...movie} />
          })
      }
      {
        match.path === '/favorites' &&
        favorites.map(favorite => {
          return <MovieCard key={favorite.id} {...favorite} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.favorites
})

export default connect(mapStateToProps)(MovieContainer);