import GET_ARTIST_LIST from './actionTypes';
import getArtist from  '../api/backend';

export function fetchArtist() {
  const request = getArtist()
  return {
    type: GET_ARTIST_LIST,
    payload: request
  };
};
