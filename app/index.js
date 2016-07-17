import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ArtistPage from './artists/ArtistPage';

injectTapEventPlugin();
const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
