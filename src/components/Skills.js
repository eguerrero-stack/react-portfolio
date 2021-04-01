import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {Card,Grid} from '@material-ui/core';
import './About.css'


const useStyles = makeStyles((theme) => ({
    root:{
        height:"auto",
        textAlign:'center'
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
    subTitle:{
        fontSize: '1rem',
        '@media (min-width:600px)':{
            fontSize: '2rem'
        },
        '@media (min-width:1700px)':{
            fontSize: '4rem',
        },
        margin:0,
        
    },
    
}))

export default function Skills() {
    const classes = useStyles();
    const [skill, setSkill] = useState('Web Development');
    
    return (
        <div className={classes.root}>
            <h2 className={classes.subTitle}>{skill}</h2>
        <Grid container  className={classes.container}>
                        <Grid item xs={12} sm={12} md={6} className={classes.iconSection}>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i  data-toggle="tooltip" title="Javascript" className={`${classes.icon} devicon-javascript-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())} />
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Html5"className={`${classes.icon} devicon-html5-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Css3"className={`${classes.icon} devicon-css3-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>

                            <Card className={`${classes.card} card ${classes.border} `} > 
                                <i data-toggle="tooltip" title="BootStrap" className={`${classes.icon} devicon-bootstrap-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Material-Ui"className={`${classes.icon} devicon-materialui-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            </Grid>
                       {/*
                        Middle 
                       */}
                        <Grid item xs={12} sm={12} md={6} className={classes.iconSection}>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="C#" className={`${classes.icon} devicon-csharp-plain`}onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title=".Net" className={`${classes.icon} devicon-dot-net-plain-wordmark`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Node.js" className={`${classes.icon} devicon-nodejs-plain`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="Express"className={`${classes.icon} devicon-express-original`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                            <Card className={`${classes.card} card ${classes.border}`} > 
                                <i data-toggle="tooltip" title="MS Sql Server" className={`${classes.icon} devicon-microsoftsqlserver-plain-wordmark`} onMouseEnter={(e)=> setSkill(e.target.title.toUpperCase())}/>
                            </Card>
                        </Grid>
                     </Grid>
         </div>
    )
}
