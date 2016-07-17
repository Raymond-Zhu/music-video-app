import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../rootReducer';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(router, logger, ReduxPromise),
  window.devToolsExtension ? window.devToolsExtension() : noop => noop
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../rootReducer', () =>
      store.replaceReducer(require('../rootReducer')) // eslint-disable-line global-require
    );
  }

  return store;
}
