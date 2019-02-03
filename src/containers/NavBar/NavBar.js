import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUser, setFavorites } from '../../actions';

export class NavBar extends Component {
  handleClick = () => {
    this.props.setUser({});
    this.props.setFavorites([]);
    localStorage.removeItem('user');
    localStorage.removeItem('favorites');
  }

  getUserLinks = () => {
    const { currentUser, location } = this.props
    if (currentUser.name) {
      return (
        <div className="user-links">
          <p className="greeting">Hello,<span className="username">
           { currentUser.name }
          </span></p>
          <span className="nav-left">
          {location.pathname !== '/' && <Link to='/' id="item-left">Home</Link>}
          {location.pathname === '/' && <Link to='/favorites' id="item-left">View Favorites</Link>}
          </span>
          <span className="nav-right">
            <Link to='/' id="logout-link" onClick={this.handleClick}>Log Out</Link>
          </span>
        </div>
      );
    } else {
      return (
        <div className="user-links">
          <span className="nav-left">
            {location.pathname !== '/' && <Link to='/' id="item-left">Home</Link>}
            <Link to='/sign-up' id="item-left">Sign Up</Link>
            <Link to='/login' id="item-right">Log In</Link>
          </span>
          <span className="nav-right">
            <p>Log in to save your favorite movies.</p>
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="NavBar">
        {this.getUserLinks()}
      </nav>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

NavBar.propTypes = {
  currentUser: PropTypes.object,
  setFavorites: PropTypes.func,
  setUser: PropTypes.func,
};