import React, { Component } from 'react';
import { render } from 'react-dom';
import { ipcRenderer } from 'electron';
import Youtube from 'react-youtube';
import '../app.global.css';

class YoutubeWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {videoId: ''};
    this.onEnd = this.onEnd.bind(this);

    ipcRenderer.on('video-change', (event, arg) => {
      this.setState({videoId: arg});
    });
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
        videoId={this.state.videoId}
        opts={opts}
        onEnd={this.onEnd}
      />
    );
  }

  onEnd(event) {
    ipcRenderer.send('video-finished' );
  }
}

render(<YoutubeWindow />, document.getElementById('player'));


