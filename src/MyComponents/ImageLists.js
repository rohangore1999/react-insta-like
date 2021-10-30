import React, { useEffect } from 'react';
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

// on scroll animation
import Aos from 'aos'
import "aos/dist/aos.css"



export default function ImageLists(props) {

    // initializing AOS
    useEffect(() => {
        Aos.init({duration:2000});
       
    }, []) //[] means after reloading at beginning


    /* setting value to progress */


    console.log(props.datasLength)

    // use useEffect because directly react is not allowing to use props in return()
    useEffect(() => {
        // Update the setvalue from app.js
        props.setvalue(100)
    });

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 data-aos="fade-right" className="display-5 fw-bold">MONEY<span style={{color:"grey"}}>GRAM</span>.</h1>
                    <p data-aos="fade-up" className="col-md-8 fs-4">Visit & Like the posts and get ₹1 for each like.</p>
                    {/* <button className="btn btn-primary btn-lg" type="button">Know more</button> */}
                </div>
            </div>

            <div className="container text-center my-5">
                <div className="container align-center row row-cols-1 row-cols-md-3 g-4 my-5">

                    {/* setting value to progress */}
                    {/* {props.setvalue(100)} */}

                    {data.map((item) => (
                        <div data-aos="zoom-in" className="card-body" key={item.id}>
                            <Card className="card h-100 " >
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">{item.post.charAt(0)}</Avatar>
                                    }
                                    title={item.post}
                                    subheader={item.date}
                                />
                                <CardMedia>
                                    <CardMedia component="img" image={item.image} alt="Paella dish"
                                    />
                                </CardMedia>
                                {/* to make botton stick to bottom ref link~ https://stackoverflow.com/questions/48406628/bootstrap-align-button-to-the-bottom-of-card */}
                                <CardContent className="card-body d-flex flex-column" >
                                    <h4>Description:</h4>
                                    <Typography variant="body2" className="mb-5">
                                        {item.description}
                                    </Typography>
                                    {/* <Button onClick={toggleDrawer(true)} className="mt-3" variant="contained">Contained</Button> */}

                                    {/* <button className="btn btn-danger btn-sm mt-3" onClick={visitlink}>Visit Link</button> */}

                                    {/* setting value to progress */}

                                    <Button className="mt-auto" variant="contained" style={{ backgroundColor: '#bb2d3b', borderColor: '#dc3545', color: 'white', marginTop: "auto", display: "inline-block" }} onClick={e => props.visitlink(item.link, item.insta_handle)}>Visit Link</Button>
                                    {/* <DrawerButton /> */}


                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
