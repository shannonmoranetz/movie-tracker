import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/api';
import { setUser, setFavorites, toggleLoginPrompt } from '../../actions';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: ''
    };
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
      const user_id = response.data.id;
      const favesUrl = `http://localhost:3000/api/users/${user_id}/favorites`;
      const favorites = await fetchData(favesUrl);
      this.props.setFavorites(favorites.data);
      this.props.toggleLoginPrompt();
      this.setState({ status: response.status });
    } catch (error) {
      this.setState({ status: 'error' });
    }
  }

  render() {
    let { status } = this.state;
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="email-section">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="password-section">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="submit-section">
            <input type="submit" value="login" />
          </div>
        </form>
      {status === 'error' && <p>Email and password do not match.</p>}
      {status === 'success' && <Redirect to='/' />}
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites)),
  toggleLoginPrompt: () => dispatch(toggleLoginPrompt())
});

export default connect(null, mapDispatchToProps)(LoginForm);
