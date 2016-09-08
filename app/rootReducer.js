import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import artists from './artist/reducer';
import trackQueue from './track/reducer';

const rootReducer = combineReducers({
  routing,
  artists,
  trackQueue
});

export default rootReducer;
