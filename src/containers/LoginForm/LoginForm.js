import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from '../../utils/api';
import { setUser, setFavorites, toggleLoginPrompt } from '../../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleChange = (event) => {
    const { id, value } = event.target
    this.setState({ [id]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const loginUrl = 'http://localhost:3000/api/users';
      const options = {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await fetchData(loginUrl, options);
      const { name, id } = response.data;
      this.props.setUser({ name, id });
      await this.getFavorites(response.data.id);
      this.props.toggleLoginPrompt(false);
      this.setState({ status: response.status });
    } catch (error) {
      this.setState({ status: 'error' });
    }
  }

  getFavorites = async (user_id) => {
    const favesUrl = `http://localhost:3000/api/users/${user_id}/favorites`;
    const response = await fetchData(favesUrl);
    const favorites = response.data.map(favorite => favorite.movie_id);
    this.props.setFavorites(favorites);
  }

  render() {
    let { status } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={this.handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={this.handleChange} />
        <input type="submit" value="login" />
        {status === 'error' && <p>Email and password do not match.</p>}
        {status === 'success' && <Redirect to='/' />}
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
  toggleLoginPrompt: (validity) => dispatch(toggleLoginPrompt(validity))
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  setFavorites: PropTypes.func,
  setUser: PropTypes.func,
  toggleLoginPrompt: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};