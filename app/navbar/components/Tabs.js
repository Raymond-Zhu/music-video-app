import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';

const style = {
  padding: 10
}

const NavTabs = () => (
  <Tabs>
    <Tab label="Artist" style={style}>
    </Tab>
    <Tab label="Youtube" style={style}>
    </Tab>
  </Tabs>
);

export default NavTabs;
