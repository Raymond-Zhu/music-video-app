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
        <div>Hello World!</div>
      );
    };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtist }, dispatch)
}

export default connect(null, mapDispatchToProps)(ArtistPage)
