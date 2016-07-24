import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchArtist, selectArtist } from '../actions';
import { connect } from 'react-redux';
import ArtistList from '../components/ArtistList';

class ArtistPage extends Component {
  componentDidMount() {
    this.props.fetchArtist();
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
  return {artists: state.artists};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtist, selectArtist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage)
