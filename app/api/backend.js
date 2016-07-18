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

export { getArtist };
