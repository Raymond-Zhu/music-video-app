import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';

class SideBar extends Component {
  constructor(props)  {
    super(props);
  }

  render() {
    var style = {
      width: 300,
      float: 'right',
      'height': '100%',
      overflow: 'auto',
    }
    return (
      <div style={style}>
        <Player nowPlaying={this.props.trackQueue[0]}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {trackQueue: state.trackQueue};
}

export default connect(mapStateToProps)(SideBar);
