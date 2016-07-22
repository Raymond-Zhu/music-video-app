import axios from 'axios';

export function getArtist() {
  const url = 'http://localhost:4000/api/artist';
  return axios.get(url);
}

export function getTracks(artistId) {
  const url = `http://localhost:4000/api/track?artist_id=${artistId}`;
  return axios.get(url);
}

export { getArtist, getTracks };
