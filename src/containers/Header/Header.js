import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUser, setFavorites } from '../../actions';

export class Header extends Component {
  handleClick = () => {
    this.props.setUser({});
    this.props.setFavorites([]);
  }

  getUserLinks = () => {
    const { currentUser } = this.props
    if (currentUser.name) {
      return (
        <nav className="user-links">
          <p className="greeting">Hello,<span className="username">
           { currentUser.name }
          </span></p>
          <span className="nav-left">
          <Link to='/favorites' id="item-left">View Favorites</Link>
          </span>
          <span className="nav-right">
            <Link to='/' id="logout-link" onClick={this.handleClick}>Log Out</Link>
          </span>
        </nav>
      );
    } else {
      return (
        <nav className="user-links">
          <span className="nav-left">
            <Link to='/sign-up' id="item-left">Sign Up</Link>
            <Link to='/login' id="item-right">Log In</Link>
          </span>
          <span className="nav-right">
            <p className="login-notice">Log in to save your favorite movies.</p>
          </span>
        </nav>
      );
    }
  }

  render() {
    return (
      <header className="Header">
        {this.getUserLinks()}
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  setUser: () => dispatch(setUser()),
  setFavorites: () => dispatch(setFavorites())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Header)

Header.propTypes = {
  currentUser: PropTypes.object,
  setFavorites: PropTypes.func,
  setUser: PropTypes.func
};