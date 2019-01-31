import React from 'react';
import { Link } from 'react-router-dom';

const LoginPrompt = () => {
  return (
    <div className="login-prompt">
      <Link to='/'><button>X</button></Link>
      <h3 className="prompt-text">
        You must be logged in to save favorites.
      </h3>
      <Link to='/sign-up'><button>Sign Up</button></Link>
      <Link to='/login'><button>Log In</button></Link>
    </div>
  );
}

export default LoginPrompt;