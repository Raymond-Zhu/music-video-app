import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import { Link } from 'react-router';
import { hashHistory } from 'react-router'

const style = {
  padding: 10,
}

function handleActive(tab) {
  hashHistory.push(tab.props['data-route']);
}

const NavTabs = () => (
  <Tabs>
    <Tab label="Artist"
         style={style}
         value="ARTIST"
         data-route="/"
         onActive={handleActive}>
    </Tab>
    <Tab label="Youtube"
         style={style}
         value="YOUTUBE"
         data-route="/youtube"
         onActive={handleActive}>
    </Tab>
    <Tab label="Now Playing"
         style={style}
         value="PLAYING">
    </Tab>
  </Tabs>
);

export default NavTabs;
