import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavTabs from './Tabs'

export default class NavBar extends Component {
  render() {
    return (
      <AppBar
        children={<NavTabs />}
        title="Title"
        showMenuIconButton={false}
      />
    );
  };
};
