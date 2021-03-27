import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Background from "../images/overlookingCity.png"
import DevTitle from './DevTitle'
export default function Home({setValue, value}) {
// Small intro, display fortune api here only? or as footer across whole portfolio?

//@ToDo add a footer with icon links to LinkedIn and Github
    const useStyles = makeStyles(theme=>({
        root: {
          minWidth: 275,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          height:'90vh',
          overflow:'hidden',
          textAlign:'center',          
        },
        media:{
          minHeight:'20vh',
          width:'auto'
        },
        card:{
          backgroundRepeat:"no-repeat",
          backgroundAttachment:"fixed",
          backgroundSize:"contain",
          backgroundPosition:"50% 50%",
          backgroundImage:`url(${Background})`,
          height:'100%',
          width: '35vw',
          position: "relative",
          [theme.breakpoints.down('xs')]:{
            width:'90vw',
           
          },
          // filter: "blur(1px)"
        },
        content:{
          position:"absolute",
          paddingTop:"25px",
        // background: 'rgba(21,21,21, 0.1)',

        },
        title: {
          fontSize: 28,
          color: 'white',
          filter:"none"
          
        },
        paper:{
          height:'60vh',
          textAlign:"center",
          justifyContent:"center",
          display:"flex"

        },
        pos: {
          marginBottom: 12,
          color: 'white',
          fontSize: 32,
        },
        subtitle:{
          paddingTop: '10px',
          fontSize: '4rem'
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
          <Button variant="contained" color="primary" size="large" onClick={()=>setValue(1)}>Learn More</Button>
      </CardContent>
    </Paper> 
    </div>
  );
}
