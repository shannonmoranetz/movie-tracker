import React, { Component } from 'react';
import { loginUser } from '../../utils/queries'; // maybe don't need if fetchUsers called
import { fetchUsers } from '../../utils/queries';


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      const response = await loginUser(email, password)
      console.log(response)
      this.setState({ status: response.status });
    } catch (error) {
      this.setState({ status: 'error' });
    }
  }

  render() {
    let { email, password, status } = this.state
    return(
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="email-section">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>
          <div className="password-section">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={this.handleChange} />
          </div>
          <div className="submit-section">
            <input type="submit" value="login" />
          </div>
        </form>
        <p>{status}</p>
      </div>
    );
  }
}

export default LoginForm;
