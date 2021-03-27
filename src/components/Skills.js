import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {Card,Grid} from '@material-ui/core';
import './About.css'

const useStyles = makeStyles((theme) => ({
    root:{
        height:"auto"
    },
    border:{
        border: 'none',
        '@media (min-width:450px)':{
            border: '2px solid black'
        }
    },
    container:{   
        justifyContent:'center',  
    },
    card:{
        background:'inherit',
        
        margin: theme.spacing(2)

    },
    iconSection:{
        fontSize: '1.5rem',
        '@media (min-width:600px)':{
            fontSize: '4rem'
        },
        '@media (min-width:1700px)':{
            fontSize: '7rem',
            paddingTop: '100px'
        },
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
        
    },
    icon:{
        [theme.breakpoints.up('sm')]:{
            margin: theme.spacing(2),
            
          },
        padding:theme.spacing(1)
    },
}))

export default function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container  className={classes.container}>
                        <Grid item xs={12} sm={12} md={6} className={classes.iconSection}>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i  data-toggle="tooltip" title="Javascript" className={`${classes.icon} devicon-javascript-plain`}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Html5"className={`${classes.icon} devicon-html5-plain`}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Css3"className={`${classes.icon} devicon-css3-plain`}/>
                            </Card>

                            <Card className={`${classes.card} card ${classes.border} `} > 
                                <i data-toggle="tooltip" title="BootStrap" className={`${classes.icon} devicon-bootstrap-plain`}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Material-Ui"className={`${classes.icon} devicon-materialui-plain`}/>
                            </Card>
                            </Grid>
                       {/*
                        Middle 
                       */}
                        <Grid item xs={12} sm={12} md={6} className={classes.iconSection}>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="C#" className={`${classes.icon} devicon-csharp-plain`}></i>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title=".Net" className={`${classes.icon} devicon-dot-net-plain-wordmark`}></i>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Node.js" className={`${classes.icon} devicon-nodejs-plain`}></i>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Express"className={`${classes.icon} devicon-express-original`}></i>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="MS Sql Server" className={`${classes.icon} devicon-microsoftsqlserver-plain-wordmark`}></i>
                            </Card>
                        </Grid>
                     </Grid>
         </div>
    )
}
