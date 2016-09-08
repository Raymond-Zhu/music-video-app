import React, { Component } from 'react';
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
        <Player />
      </div>
    )
  }
}

export default SideBar;
