import React, { Component, PropTypes} from 'react';
import NavBar from './navbar/components/NavBar'
import SideBar from './sidebar/containers/SideBar.js'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    var contentStyle = {
      background: "blue",
      overflow: 'auto',
      'width' : '75%'
    }

    return (
      <div>
        <SideBar />
        <div style={contentStyle}>
          <NavBar />
          {this.props.children}
        </div>
      </div>
    );
  };
};
