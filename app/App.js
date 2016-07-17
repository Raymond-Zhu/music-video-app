import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

export default class App extends Component {
  static propTypes = { children: PropTypes.element.isRequired }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          showMenuIconButton={false}
        />
        {this.props.children}
      </div>
    );
  };
};
