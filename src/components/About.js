import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import Skills from './Skills'
import profile from "../images/profile.jpg"
import './About.css'

const useStyles = makeStyles(({
    root: {
      height:'auto',

    },
    aboutText:{
        height:'20vh',
        "@media (min-width:370px)":{
            height:'30vh'
        }
    },
    media: {
      maxHeight:'30vh',
      maxWidth:'100%',
      objectFit: 'cover',
      objectPosition: '50% 20%'

    }, 
    container:{
        height:'30vh',
        justifyContent:'center',
        background: 'rgba(21,21,21, 0.9)',
    },
    
    card:{
        background: 'rgba(21,21,21, 0.1)',
        "&:hover":{
            boxShadow: "0 10px 8px -4px black"

        }
    }

  }));

export default function About() {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>-About Me-</h1>
            </div>
            <div>
                <Grid container className={classes.container} >
                    <Grid item={true} xs={1} l={1}/>
                    
                                    <Grid item={true} xs={2} l={4}>
                                        <Card className={classes.card} >
                                             <CardMedia
                                               component="img"
                                               className={classes.media}
                                               title="Me!"
                                               image={profile}
                                             />
                                        </Card>
                                    </Grid>
                            <Grid item={true} xs={1} l={1}/>
                             
                                <Grid item={true} xs={6} >
                            <Card className={classes.aboutText}>
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  I am a Full Stack Software developer based in Orange County, California.
                                  </Typography>
                                  <Typography variant="h4" color="textSecondary" component="h3">
                                    I build websites.
                                  </Typography>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  1% better everyday
                                  </Typography>
                                  <Typography variant="h4" color="textSecondary" component="h3">
                                    I am a creator.
                                  </Typography>
                                </CardContent>
                            </Card>
                                </Grid>
                </Grid>
            </div>
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>-Skills-</h1>
            </div>
            <div>
                <Skills/>    
            </div>
        </div>
    )
}
