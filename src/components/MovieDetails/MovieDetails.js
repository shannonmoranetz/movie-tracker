import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const { title, release_date, poster_path, vote_average, overview } = props;
  return (
    <div className="MovieDetails">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-image"
      />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
          <p className="movie-overview"> {overview}</p>
          <p className="movie-details">
            <span className="detail-bold">
              Release Date: </span>
            {release_date}
          </p>
          <p className="movie-details">
            <span className="detail-bold">
              Rating: </span>
            {vote_average}
          </p>
      </div>
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