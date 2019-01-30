import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieContainer = ({ movies }) => {
  return (
    <div className="MovieContainer">
      {
        movies.map(movie => {
          return <MovieCard key={movie.id} {...movie} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

export default connect(mapStateToProps)(MovieContainer);