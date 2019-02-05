import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleLoginPrompt } from '../../actions';

export const LoginPrompt = (props) => {
  const { toggleLoginPrompt } = props;
  return (
    <div className="LoginPrompt">
      <button className="close-button" onClick={() => toggleLoginPrompt(false)}>X</button>
      <div className="button-container">
        <h3 className="login-title">
          You must be logged in to save favorites.
        </h3>
        <Link to='/sign-up'>
          <button className="signupprompt-button" onClick={() => toggleLoginPrompt(false)}>Sign Up</button>
        </Link>
        <Link to='/login'>
          <button className="loginprompt-button" onClick={() => toggleLoginPrompt(false)}>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  toggleLoginPrompt: (validity) => dispatch(toggleLoginPrompt(validity))
})

export default connect(null, mapDispatchToProps)(LoginPrompt);

LoginPrompt.propTypes = {
  toggleLoginPrompt: PropTypes.func
}