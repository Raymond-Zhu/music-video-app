import React, { Component } from 'react';
import Artist from './Artist';
import Dialog from 'material-ui/Dialog';

export default class ArtistList extends Component {
  constructor (props) {
    super(props);
    this.state = {open: false};

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        {this.props.artist.map(({name, id, img_url}) => (
          <div key={id} onClick={this.handleOpen}>
            <Artist
              name={name}
              img={img_url}
            />
          </div>
          ))}
        <Dialog
          title="Tracks"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Hello World
        </Dialog>
      </div>
    );
  };
};

