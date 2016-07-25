import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TrackList from '../components/TrackList'

class TrackPage extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <TrackList artist={this.props.selectedArtist} />
  };
};

function mapStateToProps(state) {
  return {selectedArtist: state.artists.selectedArtist};
}

export default connect(mapStateToProps)(TrackPage);
