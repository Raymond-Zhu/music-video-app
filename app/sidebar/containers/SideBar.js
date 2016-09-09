import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Player from '../components/Player';
import { removeFromQueue } from '../../track/actions';

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
      console.log(this.props);
    return (
      <div style={style}>
        <Player
          nowPlaying={this.props.trackQueue[0]}
          removeFromQueue={this.props.removeFromQueue}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {trackQueue: state.trackQueue};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromQueue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
