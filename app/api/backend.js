export function getArtist() {
  return new Promise(function(resolve, reject){
    if(true) {
      resolve([{id: 100, name: "Justin Bieber", img_url: "http://www.fuse.tv/image/544533319a9551c444000080/316/316/justin-bieber.jpg"},
               {id: 101, name: "Adele", img_url: "https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg"}]);
    } else {
      reject(Error("Broke"));
    }
  });
  //const url = 'http://localhost:4000/api/artist';
  //return fetch(url);
}

export function getTracks(artistId) {
  return new Promise(function(resolve, reject){
    if(true) {
      resolve([{id: 100, title: "Baby", track_artist_id: "123", artist_name: "Justin Bieber", track_youtube_id: "kffacxfA7G4", popularity: .984, album_title: "Baby", image: "http://img.youtube.com/vi/kffacxFA7G4/0.jpg"},
        {id: 110, title: "Baby 1", track_artist_id: "123", artist_name: "Justin Bieber", track_youtube_id: "kffacxfA7G4", popularity: .980, album_title: "Baby", image: ""},
        {id: 120, title: "Baby 2", track_artist_id: "123", artist_name: "Justin Bieber", track_youtube_id: "kffacxfA7G4", popularity: .974, album_title: "Baby", image: "http://img.youtube.com/vi/kffacxFA7G4/0.jpg"}]);
    } else {
      reject(Error("Broke"));
    }
  });
  //const url = 'http://localhost:4000/api/track?artist_id=' + artist_id;
  //return fetch(url);
}

export { getArtist };
