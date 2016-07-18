import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import artist from './artist/reducer'

const rootReducer = combineReducers({
  routing,
  artist
});

export default rootReducer;
