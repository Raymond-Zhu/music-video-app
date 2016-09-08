import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {paused: true};
    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch() {
    if(this.state.paused) {
      this.setState({paused: false});
    } else {
      this.setState({paused: true});
    }
  }

  render() {
    return (
      <div>
        <div onTouchTap={this.handleTouch}>
          {this.state.paused ? "Play" : "Pause"}
        </div>
        <div>Next</div>
      </div>
    )
  }

}
