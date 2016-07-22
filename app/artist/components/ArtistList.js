import React, { Component } from 'react';
import Artist from './Artist';
import Dialog from 'material-ui/Dialog';
import TrackList from '../../track/components/TrackList';

export default class ArtistList extends Component {
  constructor (props) {
    super(props);
    this.state = {open: false, selectedArtist: ""};

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleOpen(artistId) {
    this.setState({open: true, selectedArtist: artistId});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        {this.props.artists.map((artist) => (
          <div key={artist.id} onClick={() => {this.handleOpen(artist.id)}}>
            <Artist
              name={artist.name}
              img={artist.img_url}
            />
          </div>
          ))}
        <Dialog
          title="Tracks"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TrackList artistId={this.state.selectedArtist} />
        </Dialog>
      </div>
    );
  };
};

