import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../../utils/queries';

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = async (user) => {
    if (user.name) {
      const response = await addFavorite({
        ...this.props,
        user_id: user.id,
        movie_id: this.props.id
      });
      console.log(response);
    } else {
      console.log('else')
      return
    }

  }

  render() {
    const { title, poster_path, user } = this.props;
    return (
      <div className="MovieCard">
        <h3 className="movie-title">{title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className='MovieCard--image'
        />
        <button onClick={() => this.handleClick(user)}>Add to Favorites</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(MovieCard);