import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Background from "../images/overlookingCity.png"
import DevTitle from './DevTitle'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Home({setValue, value}) {

    const useStyles = makeStyles(theme=>({
        root: {
          minWidth: 275,
          // display:'flex',
          alignItems:'center',
          justifyContent:'center',
          // height:'90vh',
          overflow:'hidden',
          // textAlign:'center',  
                 
        },
        media:{
          minHeight:'20vh',
          width:'auto'
        },
        card:{
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"cover",
          backgroundPosition:"50% 65%",
          backgroundImage:`url(${Background})`,
          height:'100%',
          width: '100vw',
          position: "relative",
          opacity:"0.9",
          [theme.breakpoints.down('xs')]:{
          backgroundPosition:"60% 50%",
          filter: "none",
           
          },
          filter: "blur(1px)"
        },
        content:{
          position:"absolute",
          paddingTop: "100px",
          [theme.breakpoints.down('xs')]:{

          paddingTop:"25px",
          }

        },
        title: {
          fontSize: 28,
          color: 'white',
          filter:"none"
          
        },
        paper:{
          height:'55vh',
          textAlign:"center",
          justifyContent:"center",
          display:"flex",
          backgroundColor:"black" 

        },
        pos: {
          marginBottom: 12,
          color: 'white',
          fontSize: 32,
        },
        subtitle:{
          paddingTop: '10px',
          fontSize: '4rem'
        },
        btn:{
          color:'black',
          backgroundColor: 'white',
          
        },
        btnContainer:{
          marginTop: '100px',
          textAlign:'center',
        },
        socialIcon:{
          color:'black',
          margin:'5px'
        }
      }));
    const classes = useStyles();
    
  return (
      <div className={classes.root}>
               <Paper className={classes.paper} >
            <Card className={classes.card} variant="outlined" fontFamily="Monospace">
            </Card>
              <CardContent className={classes.content}>
                <Typography className={classes.title} color="textSecondary"  gutterBottom>
                  My Name Is
                </Typography>
                <Typography className={classes.pos} color="textPrimary" variant="h1">
                  Edward Guerrero
                </Typography>
                <Typography className={classes.title} variant="body1" color="textSecondary" component="h5">
                  I am a 
                  <br />
                </Typography>
                <DevTitle value={value}/>
              </CardContent>
            </Paper> 
            <div>
        <div className={classes.btnContainer}>
            <Button variant="contained" className={classes.btn} size="large" onClick={()=>setValue(1)}>Learn More<ArrowForwardIcon/></Button>
          </div>
          <div style={{textAlign:'center'}}>
                <p>____________________</p>
                <a className={classes.socialIcon} href="https://www.linkedin.com/in/edward-guerrero/"><LinkedInIcon/></a>
                <a className={classes.socialIcon} href="https://github.com/eguerrero-stack/"><GitHubIcon/></a>
          </div>
        </div>
    </div>
  );
}
