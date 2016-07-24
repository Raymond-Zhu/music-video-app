import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchArtists, selectArtist } from '../actions';
import { connect } from 'react-redux';
import ArtistList from '../components/ArtistList';

class ArtistPage extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render () {
    return (
      <ArtistList
        artists={this.props.artists}
        selectArtist={selectArtist}
      />
      );
    };
};

function mapStateToProps(state) {
  return {artists: state.artists.artistList};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtists, selectArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
