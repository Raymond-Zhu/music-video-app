import { GET_ARTIST_LIST } from './actionTypes';

export default function(state = [], action) {
  switch(action.type) {
  case GET_ARTIST_LIST:
    return action.payload;
  }
  return state;
}
