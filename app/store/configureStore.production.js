import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../rootReducer';

const enhancer = applyMiddleware(ReduxPromise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
