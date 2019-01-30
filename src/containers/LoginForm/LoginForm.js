import React, { Component } from 'react';
import { loginUser } from '../../utils/queries'; // maybe don't need if fetchUsers called
import { fetchUsers } from '../../utils/queries';


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount = () => {
    fetchUsers('test1', 'test2')
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    let { email, password } = this.state
    return(
      <div className="login-form">
        <h2>Login</h2>
        <form className="login-form">
          <div className="email-section">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>
          <div className="password-section">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={this.handleChange} />
          </div>
          <div className="submit-section">
            <button  type="submit" onSubmit={() => fetchUsers(email, password)}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
