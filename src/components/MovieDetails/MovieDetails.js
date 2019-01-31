import React from 'react';

const MovieDetails = (props) => {
  const { title, release_date, poster_path, vote_average, overview } = props;
  return (
    <div className="MovieDetails">
      <h3 className="h3">{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="MovieDetails--image"
      />
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}</p>
    </div>
  )
}

export default MovieDetails;