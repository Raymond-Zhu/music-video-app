import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import artistReducer from './artist/reducer'

const rootReducer = combineReducers({
  routing,
  artistReducer
});

export default rootReducer;
