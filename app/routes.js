import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'
import ArtistPage from './artists/ArtistPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArtistPage} />
  </Route>
);
