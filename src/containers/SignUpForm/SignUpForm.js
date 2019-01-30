import React, { Component } from 'react';
import { createUser } from '../../utils/queries';
import { Redirect } from 'react-router-dom';

class SignUpForm extends Component {
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
    if (this.checkMatchingPassword() && this.checkEmailRegex()) {
      try {
        const response = await createUser(name, email, passwordOriginal);
        this.setState({ status: response.status });
      } catch (error) {
        this.setState({ status: 'error' });
      }
    }
  }

  checkEmailRegex = () => {
    const emailRegex = /[a-z]\w+@[a-z]\w+\.[a-z]\w+/;
    return emailRegex.test(this.state.email);
  }

  checkMatchingPassword = () => {
    const { passwordOriginal, passwordConfirmed } = this.state;
    return passwordOriginal === passwordConfirmed;  
  }

  getNameAndEmailInputFields = () => {
    const { name, email } = this.state;
    const inputStyle = this.checkEmailRegex() ? null : 'input--red';
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
        {!this.checkEmailRegex() && <p>Enter a valid email</p>}
      </div>
    )
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
        {!this.checkMatchingPassword() && <p>Passwords do not match</p>}
      </div>
    )
  }

  render() {
    const { name, email, status } = this.state;
    return(
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Sign Up</h2>
        {this.getNameAndEmailInputFields()}
        {this.getPasswordInputFields()}
        <input type="submit" value="Submit" />
        {status === 'error' && <p>Email already registered to an account</p>}
        {status === 'success' && <Redirect to='/login' />}
      </form>
    );
  }
}

export default SignUpForm;