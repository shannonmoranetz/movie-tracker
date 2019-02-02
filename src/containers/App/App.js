import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../thunks/fetchMovies';
import LoginForm from '../LoginForm/LoginForm';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import NavBar from '../../containers/NavBar/NavBar';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';

export class App extends Component {
  componentDidMount = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = 
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    this.props.fetchMovies(url);
  }
  
  render() {
    const { movies } = this.props;
    return (
      <div className="App">
        <header className="title-section">
            <Link to='/'><h1 className="app-title">Movie Tracker</h1></Link>
            <h2 className="app-subtitle">Find and save your favorite new releases.</h2>
        </header>
        <Route path='/' component={NavBar} />
        <Route path='/sign-up' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/favorites' component={MovieContainer}/>
        <Route exact path='/' component={MovieContainer} />
        <Route path='/movies/:id' render={({ match }) => {
          const { id } = match.params;
          const movie = movies.find(movie => movie.id === parseInt(id));
          return movie ? <MovieDetails {...movie} /> : null;
        }} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (url) => dispatch(fetchMovies(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  movies: PropTypes.array,
  addMovies: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};