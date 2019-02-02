import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from '../../utils/api';
import { addMovies } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';

export class App extends Component {
  componentDidMount = () => {
    this.fetchMovies();
  }
  
  fetchMovies = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = 
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    const data = await fetchData(url);
    this.props.addMovies(data.results);
  }
  
  render() {
    const { movies } = this.props;
    return (
      <div className="App">
        <Link to='/'><h1 className="h1">Movie Tracker</h1></Link>
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
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  movies: PropTypes.array,
  addMovies: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};