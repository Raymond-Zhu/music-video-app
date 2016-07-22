import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import artists from './artist/reducer'

const rootReducer = combineReducers({
  routing,
  artists
});

export default rootReducer;
