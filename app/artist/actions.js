import { GET_ARTIST_LIST, SELECTED_ARTIST } from './actionTypes';
import { getArtist } from  '../api/backend';

export function fetchArtists() {
  const request = getArtist();
  return {
    type: GET_ARTIST_LIST,
    payload: request
  };
};

export function selectArtist(artist) {
  return {
    type: SELECTED_ARTIST,
    selectedArtist: artist
  };
}
