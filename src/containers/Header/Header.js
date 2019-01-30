import React from 'react';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  return user.name ?
    <p>Hello, { user.name }</p> :
    <p>Log in to view your saved movies.</p>
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Header)