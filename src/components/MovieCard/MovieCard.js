import React from 'react';

const MovieCard = ( { title, poster_path } ) => {
  return (
    <div className="movie-card">
      <h3 className="movie-title">{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
    </div>
  )
}

export default MovieCard;