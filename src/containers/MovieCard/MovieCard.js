import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleLoginPrompt } from '../../actions';
import { toggleFavorite } from '../../thunks/toggleFavorite';

export class MovieCard extends Component {
  handleClick = async (user) => {
    if (user.name) {
      const movie = {
        ...this.props,
        user_id: user.id,
        movie_id: this.props.id
      };
      await this.props.toggleFavorite(movie, this.props.favorite);
    } else {
      this.props.toggleLoginPrompt(true);
    }
  }

  render() {
    const { title, poster_path, currentUser, favorite, id } = this.props;
    return (
      <div className="MovieCard">
        <h3 className="moviecard-title">{title}</h3>
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="moviecard-image"
          />
        </Link>
        <div className="moviecard-favorite" onClick={() => this.handleClick(currentUser)}>
          { favorite ? 'Remove ❌' : 'Favorite 💙'}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  toggleLoginPrompt: (validity) => dispatch(toggleLoginPrompt(validity)),
  toggleFavorite: (movie, isFavorite) => dispatch(toggleFavorite(movie, isFavorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

MovieCard.propTypes = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  currentUser: PropTypes.object,
  favorite: PropTypes.bool,
  genre_ids: PropTypes.array,
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  toggleFavorite: PropTypes.func,
  toggleLoginPrompt: PropTypes.func,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number
};