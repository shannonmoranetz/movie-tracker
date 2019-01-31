import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

const Header = ({ currentUser, logoutUser }) => {
  return (
    <header className="Header">
      {
        currentUser.name ?
        <div>
          <p>Hello, { currentUser.name }</p>
          <a href='' onClick={() => logoutUser()}>Log Out</a>
        </div> :
        <p>Log in to view your favorited movies.</p>
      }
    </header>
  );
}

export const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Header)