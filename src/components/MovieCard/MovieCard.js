import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFavorite } from '../../utils/queries';
import { addFavorite } from '../../actions';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = async (user) => {
    if (user.name) {
      const favorite = {
        ...this.props,
        user_id: user.id,
        movie_id: this.props.id
      };
      await postFavorite(favorite);
      this.props.addFavorite(favorite)
    } else {
      console.log('else')
      return;
    }
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
  user: state.user,
});

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (movie) => dispatch(addFavorite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);