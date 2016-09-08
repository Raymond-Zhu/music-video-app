import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import artists from './artist/reducer';
import tracks from './track/reducer';

const rootReducer = combineReducers({
  routing,
  artists,
  tracks
});

export default rootReducer;
