import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

const Header = ({ user, logoutUser }) => {
  return (
    <header className="Header">
      {
        user.name ?
        <div>
          <p>Hello, { user.name }</p>
          <a href='' onClick={() => logoutUser()}>Log Out</a>
        </div> :
        <p>Log in to view your favorited movies.</p>
      }
    </header>
  );
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Header)