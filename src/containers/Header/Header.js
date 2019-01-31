import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser, setFavorites } from '../../actions';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    this.props.logoutUser();
    this.props.setFavorites([]);
  }

  render() {
    const { currentUser } = this.props
    return (
      <header className="Header">
        {
          currentUser.name ?
          <div>
            <p>Hello, { currentUser.name }</p>
            <Link to='/' onClick={this.handleClick}>Log Out</Link>
          </div> :
          <p>Log in to view your favorited movies.</p>
        }
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  setFavorites: () => dispatch(setFavorites())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Header)