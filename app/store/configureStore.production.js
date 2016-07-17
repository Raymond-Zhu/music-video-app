import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../rootReducer';

const router = routerMiddleWare(hashHistory);
const enhancer = applyMiddleware(ReduxPromise, router);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
