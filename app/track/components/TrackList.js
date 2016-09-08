import React, { Component } from 'react';
import { getTracks } from '../../api/backend';
import Track from './Track';

export default class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {tracks: []};
  };

  handleOnTouch(track, addToNowPlaying) {
    addToNowPlaying(track);
  };

  componentDidMount() {
    getTracks(this.props.artist.id).then((response) => {
      this.setState({tracks: response.data.tracks});
    });
  };

  render() {
    return (
      <div>
        {this.state.tracks.map((track) => (
          <div key={track.id} onTouchTap={() => this.handleOnTouch(track, this.props.addToNowPlaying)}>
            <Track track={track}/>
          </div>
        ))}
      </div>
    )
  };
};
