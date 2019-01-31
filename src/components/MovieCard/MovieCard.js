import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/api';
import { postFavorite, deleteFavorite } from '../../utils/queries';
import { getFavorites } from '../../actions';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = async (user) => {
    if (user.name) {
      const movie = {
        ...this.props,
        user_id: user.id,
        movie_id: this.props.id
      };
      await this.toggleFavorite(movie);
    } else {
      // Prompt user to log in to save favorites
      return;
    }
  }

  toggleFavorite = async (movie) => {
    const { user_id, movie_id } = movie;
    if (this.props.favorite) {
      const response = await deleteFavorite(user_id, movie_id);
    } else {
      await postFavorite(movie);
    }
    const favorites = await fetchData(`
      http://localhost:3000/api/users/${user_id}/favorites
    `);
    this.props.getFavorites(favorites.data);
  }

  render() {
    const { title, poster_path, user, favorite } = this.props;
    return (
      <div className="MovieCard">
        <h3 className="movie-title">{title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className='MovieCard--image'
        />
        <button onClick={() => this.handleClick(user)}>
          { favorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  getFavorites: (favorites) => dispatch(getFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);