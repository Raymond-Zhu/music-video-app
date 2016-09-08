import React, { Component } from 'react';
import Controls from './Controls.js';

export default class Player extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    var style = {
      'height' : '50%'
    }

    return (
      <div style={style}>
        <Controls />
      </div>
    )
  }

};
