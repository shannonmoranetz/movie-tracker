import React, { Component } from 'react';
import { fetchData, postData } from '../../utils/api';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/index';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import { createUser, loginUser } from '../../utils/queries';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const data = await fetchData('https://api.themoviedb.org/3/movie/now_playing', '&language=en-US&page=1');
    data.results.forEach((movie) => this.props.addMovie(movie));
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => {
          return this.props.movies.length > 0 ? <MovieContainer /> : null;
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
