import React, { Component } from 'react';
import Artist from './Artist';
import Dialog from 'material-ui/Dialog';

export default class ArtistList extends Component {
  constructor (props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    return (
      <div>
        {this.props.artist.map(({name, id, img_url}) => (
          <div key={id}><Artist name={name} img={img_url} /></div>
        ))}
      </div>
    );
  };
};

