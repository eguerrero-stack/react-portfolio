import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';

import Skills from './Skills'
import profile from "../images/profile.jpg"
import './About.css'

const useStyles = makeStyles(theme =>({
    root: {
      height:'auto',
        margin:'10px'
    },
    aboutText:{
        padding:'10px',
        // height:'20vh',
        "@media (min-width:1500px)":{
            height:'30vh'
        }
    },
    media: {
      maxHeight:'30vh',
      maxWidth:'100%',
      objectFit: 'cover',
      objectPosition: '50% 20%',
      borderRadius:'10%'
    }, 
    container:{
        // height:'30vh',
        justifyContent:'center',
    },
    
    card:{
        borderRadius:'10%',
        "&:hover":{
            boxShadow: "0 10px 8px -4px black"
        },  
        padding: "10px",
        [theme.breakpoints.down('xs')]:{
            margin:"10px"
          },
    },
    title:{
        textAlign:"center",
         color:"white",
         paddingTop:"10px"
    },
    font:{
        [theme.breakpoints.down('xs')]:{
            fontSize:"1rem"
          },
    }

  }));

export default function About() {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {/* <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>-About Me-</h1>
            </div> */}
            <div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2"  size="sm">
                                  -About Me-
            </Typography>
                <Grid container className={classes.container} >
                    <Grid item  md={1} l={1}/>
                    
                                    <Grid item={true} xs={6} sm={6} md={2} l={4}>
                                        <Card className={classes.card} >
                                             <CardMedia
                                               component="img"
                                               className={classes.media}
                                               title="Me!"
                                               image={profile}
                                             />
                                        </Card>
                                    </Grid>
                            <Grid item={true}  md={1} l={1}/>
                             
                                <Grid item={true} xs={12} md={6}>
                            <Card className={classes.aboutText}>
                                <CardContent>
                                  <Typography className={classes.font} gutterBottom variant="h5" component="h2">
                                  I am a Full Stack Software developer based in Orange County, California.
                                  </Typography>
                                  <Typography className={classes.font} variant="h4" color="textSecondary" component="h3">
                                    Websites are my thing but gaming has my heart.
                                  </Typography>
                                  <Typography className={classes.font} gutterBottom variant="h5" component="h2">
                                  I am a believer of 1% better everyday.
                                  </Typography>
                                  <Typography className={classes.font} variant="h4" color="textSecondary" component="h3">
                                    I am a creator.
                                  </Typography>
                                </CardContent>
                            </Card>
                                </Grid>
                </Grid>
            </div>
            <div style={{paddingTop:"10px"}}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title} size="sm">
                                  -Skills-
            </Typography>
            </div>
           
            <Grid container>
                <Grid item xs={12}>
                    <Skills/>    
                </Grid>
            </Grid>
            
        </div>
    )
}
