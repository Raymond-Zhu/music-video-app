import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TrackList from '../components/TrackList'
import { addToNowPlaying } from '../actions'

class TrackPage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <TrackList artist={this.props.selectedArtist} addToNowPlaying={this.props.addToNowPlaying} />
  };
};

function mapStateToProps(state) {
  return {selectedArtist: state.artists.selectedArtist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToNowPlaying }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage);
