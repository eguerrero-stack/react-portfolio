import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Grid, Typography,Paper,Avatar} from '@material-ui/core';
import profile from "../images/profile.jpg"


const useStyles = makeStyles((theme) =>({
    root: {
      height:'auto',

    },
    media: {
      maxHeight:'30vh',
      maxWidth:'100%',
      objectFit: 'contain',

    },
    card:{
    },
    border:{
        border: '2px solid black'
    },
    container:{
        height:'30vh',
        justifyContent:'center',
        background: 'rgba(21,21,21, 0.9)',
    },
    icons:{
        fontSize: '4rem',
        '@media (min-width:1200px)':{
            fontSize: '7rem'
        },
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
        
    },
    spacing:{
        margin: theme.spacing(1)
    },
    paper:{
        background: 'rgba(21,21,21, 0.1)'
    }

  }));

export default function About() {
    const [hover,setHover] = useState('false')
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>-About Me-</h1>
            </div>
            <div>
                <Grid container className={classes.container} xs={12} l={12}>
                    <Grid item xs={2} l={1}/>
                    
                                    <Grid item xs={2} l={4}>
                                        <Paper className={classes.paper} elevation={1}>
                                             <CardMedia
                                               component="img"
                                               className={classes.media}
                                               title="Me!"
                                               image={profile}
                                             />
                                        </Paper>
                                    </Grid>
                    <Grid item xs={2} l={1}/>
                             
                            <Card className={classes.card}>
                                <Grid item xs={6}>
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  I am a Full Stack software developer based in Orange County, California.
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    I build websites.
                                  </Typography>
                                </CardContent>
                                </Grid>
                            </Card>
                </Grid>
            </div>
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>-Skills-</h1>
            </div>
            <div>
                    <Grid container xs={12} className={classes.container}>
                        <Grid item xs={12} md={6} className={classes.icons}>
                             <i  data-toggle="tooltip" title="Javascript" className={`${classes.spacing} devicon-javascript-plain`}/>

                            
                            <i data-toggle="tooltip" title="Html5"className={`${classes.spacing} devicon-html5-plain`}/>
                            <i data-toggle="tooltip" title="Css3"className={`${classes.spacing} devicon-css3-plain`}/>
                            <i data-toggle="tooltip" title="Bootsttrap" className={`${classes.spacing} devicon-bootstrap-plain`}/>
                            <i data-toggle="tooltip" title="Material-Ui"className={`${classes.spacing} devicon-materialui-plain`}/>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.icons}>
                            <i data-toggle="tooltip" title="C#" className={`${classes.spacing} devicon-csharp-plain`}></i>
                            <i data-toggle="tooltip" title=".Net" className={`${classes.spacing} devicon-dot-net-plain-wordmark`}></i>
                            <i data-toggle="tooltip" title="Node.js" className={`${classes.spacing} devicon-nodejs-plain`}></i>
                            <i data-toggle="tooltip" title="Express"className={`${classes.spacing} devicon-express-original`}></i>
                            <i data-toggle="tooltip" title="MS Sql Server" className={`${classes.spacing} devicon-microsoftsqlserver-plain-wordmark`}></i>
                        </Grid>
                     </Grid>
            </div>
        </div>
    )
}
