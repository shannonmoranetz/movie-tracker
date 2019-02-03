import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../../thunks/loginUser';

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const status = await this.props.loginUser(email, password);
    this.setState({ status });
  }

  render() {
    let { status } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="LoginForm">
        <h2>Log In</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="email-input" onChange={this.handleChange} />
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
  loginUser: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};