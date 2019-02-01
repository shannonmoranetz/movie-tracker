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
        <div className="user-links">
          <p>Hello, { currentUser.name }</p>
          <Link to='/favorites' className="favorites-link">View Favorites</Link>
          <Link to='/' className="logout-link" onClick={this.handleClick}>Log Out</Link>
        </div>
      );
    } else {
      return (
        <div className="user-links">
          <Link to='/sign-up'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
          <p>Log in to view your favorited movies.</p>
        </div>
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