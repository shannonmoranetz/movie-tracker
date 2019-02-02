import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const { title, release_date, poster_path, vote_average, overview } = props;
  return (
    <div className="MovieDetails">
      <h3 className="movie-title">{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-image"
      />
      <p>{overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Rating: {vote_average}</p>
    </div>
  )
}

export default MovieDetails;

MovieDetails.propTypes = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.array,
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number
}