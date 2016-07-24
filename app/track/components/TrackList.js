import React, { Component } from 'react';
import { getTracks } from '../../api/backend';

export default class TrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {tracks: []};
  };

  componentDidMount() {
    getTracks(this.props.artistId).then((response) => {
      this.setState({tracks: response.data.tracks});
    });
  };

  render() {
    return (
      <div>
        {this.state.tracks.map((track) => {
          return (<div><div>{track.title}</div>
            <div>{track.title}</div></div>)
        })}
      </div>
    )
  };
};


