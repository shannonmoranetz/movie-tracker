import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/api';
import { setFavorites, toggleLoginPrompt } from '../../actions';

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
      this.props.toggleLoginPrompt()
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
    const { title, poster_path, currentUser, favorite } = this.props;
    return (
      <div className="MovieCard">
        <h3 className="movie-title">{title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className='MovieCard--image'
        />
        <button onClick={() => this.handleClick(currentUser)}>
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
  toggleLoginPrompt: () => dispatch(toggleLoginPrompt())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);