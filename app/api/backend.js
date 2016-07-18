export function getArtist() {
  return new Promise(function(resolve, reject){
    if(true) {
      resolve([{id: 100, name: "Justin Bieber", img_url: null},
               {id: 101, name: "Adele", img_url: null}]);
    } else {
      reject(Error("Broke"));
    }
  });
  //const url = 'http://localhost:4000/api/artist';
  //return fetch(url);
}

export { getArtist };
