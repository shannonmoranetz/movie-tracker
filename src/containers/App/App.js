import React, { Component } from 'react';
import { fetchData, postData } from '../../utils/api';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/index';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const data = await fetchData('https://api.themoviedb.org/3/movie/now_playing', '&language=en-US&page=1');
    data.results.forEach((movie) => this.props.addMovie(movie));
    const users = await fetchData('http://localhost:3000/api/users');
    console.log('users data before', users.data);
    const newUserResponse = await postData('/new', {
      method: 'POST',
      body: JSON.stringify({ name: 'Jeo3', email: 'test3@email.com', password: 'test'}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('newUserResponse', newUserResponse);
    const users2 = await fetchData('http://localhost:3000/api/users');
    console.log('users data after', users2.data);
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
