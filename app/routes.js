import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import ArtistPage from './artist/containers/ArtistPage';
import YoutubePage from './youtube/components/YoutubePage';
import TrackPage from './track/containers/TrackPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArtistPage} />
    <Route path="/youtube" component={YoutubePage} />
    <Route path="/track" component={TrackPage} />
  </Route>
);
