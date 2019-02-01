import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from '../../utils/api';
import { setFavorites, toggleLoginPrompt } from '../../actions';

class MovieCard extends Component {
  handleClick = async (user) => {
    if (user.name) {
      const movie = {
        ...this.props,
        user_id: user.id,
        movie_id: this.props.id
      };
      await this.toggleFavorite(movie);
    } else {
      this.props.toggleLoginPrompt(true);
    }
  }

  toggleFavorite = async (movie) => {
    const { user_id, movie_id } = movie;
    if (this.props.favorite) {
      const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`;
      const options = {
        method: 'DELETE',
        body: JSON.stringify({ user_id, movie_id }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await fetchData(url, options);
    } else {
      const url = 'http://localhost:3000/api/users/favorites/new';
      const options = {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await fetchData(url, options);
    }
    const favesUrl = `http://localhost:3000/api/users/${user_id}/favorites`;
    const response = await fetchData(favesUrl);
    const favorites = response.data.map(favorite => favorite.movie_id);
    this.props.setFavorites(favorites);
  }

  render() {
    const { title, poster_path, currentUser, favorite, id } = this.props;
    return (
      <div className="MovieCard">
        <h3 className="movie-title">{title}</h3>
        <Link to={`/movies/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="MovieCard--image"
          />
        </Link>
        <button className="favorite-button" onClick={() => this.handleClick(currentUser)}>
          { favorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
  toggleLoginPrompt: (validity) => dispatch(toggleLoginPrompt(validity))
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
  setFavorites: PropTypes.func,
  toggleLoginPrompt: PropTypes.func,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number
};