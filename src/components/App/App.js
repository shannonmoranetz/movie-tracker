import React, { Component } from 'react';
import { fetchData } from '../../utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    console.log(await fetchData('https://api.themoviedb.org/discover/movie?primary_release_year=2018'));
  } 

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
