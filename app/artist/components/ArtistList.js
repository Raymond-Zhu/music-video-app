import React from 'react';

const ArtistList = (props) => {
  return(
    <div>
      {props.artist.map(({ name, id }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}

export default ArtistList;
