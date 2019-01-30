import React, { Component } from 'react';
import { fetchData } from '../../utils/api';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/index';
import MovieContainer from '../MovieContainer/MovieContainer';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    const data = await fetchData('https://api.themoviedb.org/3/movie/now_playing', '&language=en-US&page=1');
    data.results.forEach((movie) => this.props.addMovie(movie));
  }
  
  render() {
    return (
      <div className="App">
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/login'>Login</Link>
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
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
