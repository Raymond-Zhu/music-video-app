import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const Artist = (props) => (
    <Card style={{margin: 25, textAlign: "center"}}>
      <CardMedia>
        <img src={props.img} />
      </CardMedia>
      <CardTitle title={props.name} />
    </Card>
);

export default Artist;
