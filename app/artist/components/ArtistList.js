import React, { Component } from 'react';
import Artist from './Artist';
import Dialog from 'material-ui/Dialog';
import TrackList from '../../track/components/TrackList';
import { hashHistory } from 'react-router';

export default class ArtistList extends Component {
  constructor (props) {
    super(props);
  };

  handleOnTouch(artist) {
    this.props.selectArtist(artist);
    hashHistory.push('/track');
  }

  render() {
    return (
      <div>
        {this.props.artists.map((artist) => (
          <div key={artist.id} onTouchTap={() => {this.handleOnTouch(artist)}}>
            <Artist
              name={artist.name}
              img={artist.img_url}
            />
          </div>
          ))}
      </div>
    );
  };
};

