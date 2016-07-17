import React, { Component, PropTypes} from 'react';
import NavBar from './navbar/components/NavBar'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  };
};
