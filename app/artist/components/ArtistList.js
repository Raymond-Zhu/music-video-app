import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
    console.log("hi");
}

const ArtistList = (props) => (
    <div onClick={handleClick} style={{width: 500}}>
<Card style={{flex: .5, margin: 50}}>
    <CardMedia>
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title={"hi"} />
</Card>

<Card style={{flex: .5, margin: 50}}>
    <CardMedia>
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title={"hi"} />
</Card>
</div>
    //<div>
      //{props.artist.map(({ name, id }) => {
        //return <div key={id}>{name}</div>;
      //})}
    //</div>
);

export default ArtistList;
