import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../rootReducer';

const router = routerMiddleware(hashHistory);
const enhancer = applyMiddleware(router, ReduxPromise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
