import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from '../../utils/api';
import { setUser } from '../../actions';

export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      passwordOriginal: '',
      passwordConfirmed: '',
      status: ''
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, passwordOriginal } = this.state;
    if (this.checkMatchingPassword() && this.checkEmailRegex(email)) {
      try {
        const url = 'http://localhost:3000/api/users/new';
        const options = {
          method: 'POST',
          body: JSON.stringify({ name, email, password: passwordOriginal }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const response = await fetchData(url, options);
        await this.autoLoginUser(email, passwordOriginal);
        this.setState({ status: response.status });
      } catch (error) {
        this.setState({ status: 'error' });
      }
    }
  }

  autoLoginUser = async (email, password) => {
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
  }

  checkEmailRegex = (email) => {
    const emailRegex = /[a-z]\w+@[a-z]\w+\.[a-z]\w+/;
    return emailRegex.test(email);
  }

  checkMatchingPassword = () => {
    const { passwordOriginal, passwordConfirmed } = this.state;
    return passwordOriginal === passwordConfirmed;  
  }

  getNameAndEmailInputFields = () => {
    const { name, email } = this.state;
    const inputStyle = this.checkEmailRegex(email) ? null : 'input--red';
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" value={name} onChange={this.handleChange} required />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={this.handleChange}
          required
          className={inputStyle}
        />
        {!this.checkEmailRegex(email) && <p>Enter a valid email</p>}
      </div>
    );
  }

  getPasswordInputFields = () => {
    const { passwordOriginal, passwordConfirmed } = this.state;
    const inputStyle = this.checkMatchingPassword() ? null : 'input--red';
    return (
      <div className="div--password">
        <label htmlFor="passwordOriginal">Password</label>
        <input 
          id="passwordOriginal"
          value={passwordOriginal}
          onChange={this.handleChange}
          type="password" 
          required
        />
        <label htmlFor="passwordConfirmed">Confirm Password</label>
        <input 
          id="passwordConfirmed"
          value={passwordConfirmed}
          onChange={this.handleChange}
          type="password" 
          required
          className={inputStyle}
        />
        {!this.checkMatchingPassword() && <p>Passwords do not match.</p>}
      </div>
    );
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Sign Up</h2>
        {this.getNameAndEmailInputFields()}
        {this.getPasswordInputFields()}
        <input type="submit" value="Submit" />
        {status === 'error' && <p>Email has already been used.</p>}
        {status === 'success' && <Redirect to='/' />}
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(SignUpForm);

SignUpForm.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  setUser: PropTypes.func
};