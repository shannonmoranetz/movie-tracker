import React from 'react';
import { Link } from 'react-router-dom';
import { toggleLoginPrompt } from '../../actions';
import { connect } from 'react-redux';

export const LoginPrompt = (props) => {
  const { toggleLoginPrompt } = props
  return (
    <div className="LoginPrompt">
      <button onClick={() => toggleLoginPrompt(false)}>X</button>
      <h3 className="login-title">
        You must be logged in to save favorites.
      </h3>
      <Link to='/sign-up'>
        <button onClick={() => toggleLoginPrompt(false)}>Sign Up</button>
      </Link>
      <Link to='/login'>
        <button onClick={() => toggleLoginPrompt(false)}>Log In</button>
      </Link>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  toggleLoginPrompt: (validity) => dispatch(toggleLoginPrompt(validity))
})

export default connect(null, mapDispatchToProps)(LoginPrompt);