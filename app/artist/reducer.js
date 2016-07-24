import { GET_ARTIST_LIST, SELECTED_ARTIST } from './actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_ARTIST_LIST:
      return { artistList: action.payload.data.artists, ...state };
    case SELECTED_ARTIST:
      return { selectedArtist: action.selectedArtist, ...state };
  }
  return state;
}
