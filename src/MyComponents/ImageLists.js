import React from 'react';
import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './ImageLists.css'
// import DrawerButton from './DrawerButton';

// impot json
import data from '../data.js'

export default function ImageLists(props) {

    console.log(props.datasLength)


    return (
        <div className="container row row-cols-1 row-cols-md-2 g-4 my-5">
            {data.map((item) => (
                <div className="col" key={item.id}>
                    <Card className="card">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">R</Avatar>
                            }
                            title={item.post}
                            subheader="September 14, 2016"
                        />
                        <CardMedia>
                        <CardMedia component="img" image={item.image} alt="Paella dish"
                    />
                        </CardMedia>
                        <CardContent>
                            <h4>Description:</h4>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>
                            {/* <Button onClick={toggleDrawer(true)} className="mt-3" variant="contained">Contained</Button> */}

                            {/* <button className="btn btn-danger btn-sm mt-3" onClick={visitlink}>Visit Link</button> */}

                            <Button className="mt-3" variant="contained" style={{ backgroundColor: '#bb2d3b', borderColor: '#dc3545', color: 'white' }} onClick={e => props.visitlink(item.link,item.insta_handle)}>Visit Link</Button>
                            {/* <DrawerButton /> */}

                        </CardContent>
                    </Card>
                </div>
            ))}
            {/* <div className="col">
                <Card className="card">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">R</Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia component="img" image="https://image.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg" alt="Paella dish"
                    />
                    <CardContent>
                        <h4>Description:</h4>
                        <Typography variant="body2">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>

                        <Button className="mt-3" variant="contained" style={{ backgroundColor: '#bb2d3b', borderColor: '#dc3545', color: 'white' }} onClick={e => props.visitlink('https://www.youtube.com/')}>Visit Link</Button>
                    </CardContent>
                </Card>
            </div> */}
        </div>
    );
}
