import { GET_ARTIST } from './actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_ARTIST:
      return {artists: action.payload, ...state}
  }
  return state;
}
