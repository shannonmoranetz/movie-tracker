import React from 'react';
import { connect } from 'react-redux';

const MovieContainer = ({ movies }) => {
  return (
    <div>
      {
        movies.map(movie => {
          return <p key={movie.id}>{movie.title}</p>
        })
      }
    </div>
  )

}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

export default connect(mapStateToProps)(MovieContainer);