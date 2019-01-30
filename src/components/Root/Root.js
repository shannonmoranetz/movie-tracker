import React from 'react';
import { Route } from 'react-router-dom';
import App from '../../containers/App/App';

const Root = () => {
  return <Route path="/" component={App} />
}

export default Root;