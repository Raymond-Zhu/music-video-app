import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchArtist } from '../actions'
import { connect } from 'react-redux';

class ArtistPage extends Component {
  componentDidMount() {
    this.props.fetchArtist();
  }

  render () {
      return (
        <div>{this.props.artist[0].name}</div>
      );
    };
};

function mapStateToProps(state) {
  return {artist: state.artist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
