import React, { Component } from 'react';
import Artist from './Artist';
import Dialog from 'material-ui/Dialog';
import TrackList from '../../track/components/TrackList';
import { hashHistory } from 'react-router';

const handleOnTouch = (artist, selectArtist) => {
  selectArtist(artist);
  hashHistory.push('/track');
}

const ArtistList = ({artists, selectArtist}) => (
  <div>
    {artists !== undefined
      ? artists.map((artist) => ( //TODO If artist is null, return loading
        <div key={artist.id} onClick={() => {handleOnTouch(artist, selectArtist)}}>
          <Artist
            name={artist.name}
            img={artist.img_url}
          />
        </div>))
      : <div>Loading</div>}
    </div>
);

export default ArtistList;
