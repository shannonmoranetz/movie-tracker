import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/api';
import { loginUser } from '../../utils/queries';
import { setUser, getFavorites } from '../../actions';
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
      const response = await loginUser(email, password);
      this.props.setUser(response.data);
      const user_id = response.data.id;
      const favorites = await fetchData(`
        http://localhost:3000/api/users/${user_id}/favorites
      `);
      this.props.getFavorites(favorites.data);
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
  getFavorites: (favorites) => dispatch(getFavorites(favorites))
});

export default connect(null, mapDispatchToProps)(LoginForm);
