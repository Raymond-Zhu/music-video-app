import React, { Component } from 'react';
import { getTracks } from '../../api/backend';
import Track from './Track';

export default class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {tracks: []};
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
          <Track key={track.id} track={track}/>
        ))}
      </div>
    )
  };
};
