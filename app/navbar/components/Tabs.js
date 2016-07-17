import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import { Link } from 'react-router';

const style = {
  padding: 10,
}

const NavTabs = () => (
  <Tabs>
    <Link to="/">
      <Tab label="Artist" style={style} value="ARTIST"></Tab>
    </Link>
    <Link to="/youtube">
      <Tab label="Youtube" style={style} value="YOUTUBE"></Tab>
    </Link>
    <Tab label="Now Playing" style={style} value="PLAYING">
    </Tab>
  </Tabs>
);

export default NavTabs;
