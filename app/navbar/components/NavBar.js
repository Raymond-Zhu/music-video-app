import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Tab, Tabs} from 'material-ui/Tabs';

export default class NavBar extends Component {
  render() {
    return (
      <AppBar
        children={<Tabs>
                    <Tab label="Artist">
                    </Tab>
                  </Tabs>}
        title="Title"
        showMenuIconButton={false}
      />
    );
  };
};
