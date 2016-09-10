import React, { Component } from 'react';
import { render } from 'react-dom';
import Youtube from 'react-youtube';
import '../app.global.css';

class YoutubeWindow extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const opts = {
      height: window.innerHeight,
      width: window.innerWidth,
      playerVars: {
        controls: 0,
        autoplay: 1,
        modestbranding: 1,
        showinfo: 0
      }
    };


    return (
      <Youtube
        videoId="M7lc1UVf-VE"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    event.target.playVideo();
  }
}

render(<YoutubeWindow />, document.getElementById('player'));


