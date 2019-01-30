import React, { Component } from 'react';
import { fetchData } from '../../utils/api';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/index';
import MovieContainer from '../MovieContainer/MovieContainer';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import { withRouter } from "react-router-dom";
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';

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
        <Link to='/'><h1>Movie Tracker</h1></Link>
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route exact path='/' render={() => {
          return (
            <div className="App--home">
              <Header />
              {
                !this.props.user.name && 
                <div className="user-links">
                  <Link to='/sign-up'>Sign Up</Link>
                  <Link to='/login'>Login</Link>
                </div>
              }
              {this.props.movies.length > 0 ? <MovieContainer /> : null};
            </div>
          );
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addMovie: (movie) => dispatch(addMovie(movie))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
