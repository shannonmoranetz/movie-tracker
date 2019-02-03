import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUser } from '../../thunks/createUser';

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
      const status = await this.props.createUser(name, email, passwordOriginal);
      this.setState({ status });
    }
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
      <div className="div--email">
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
        {!this.checkEmailRegex(email) && <p className="notice">Enter a valid email</p>}
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
        {!this.checkMatchingPassword() && <p className="notice">Passwords do not match.</p>}
      </div>
    );
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="SignUpForm">
        <h2 className="signup-title">Sign Up</h2>
        {this.getNameAndEmailInputFields()}
        {this.getPasswordInputFields()}
        <input className="create-button" type="submit" value="Submit" />
        {status === 'error' && <p className="notice">Email has already been used.</p>}
        {status === 'success' && <Redirect to='/' />}
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  createUser: (name, email, password) => dispatch(
    createUser(name, email, password)
  )
});

export default connect(null, mapDispatchToProps)(SignUpForm);

SignUpForm.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  createUser: PropTypes.func
};