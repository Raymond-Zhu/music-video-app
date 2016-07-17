export function getArtist() {
  const url = 'http://localhost:4000/api/artist';
  return fetch(url);
}
