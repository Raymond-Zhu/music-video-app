import React, { Component, PropTypes} from 'react';
import NavBar from './navbar/components/NavBar'
import SideBar from './sidebar/containers/SideBar.js'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    var contentStyle = {
      overflow: 'auto',
      width : 'calc(100% - 300px)',
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
