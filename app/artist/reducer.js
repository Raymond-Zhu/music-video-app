import { GET_ARTIST_LIST } from './actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
  case GET_ARTIST_LIST:
    console.log(action.payload);
    return {...state, artists: action.payload};
  }
  return state;
}
