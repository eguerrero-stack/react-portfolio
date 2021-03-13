import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import HomeBg from "../images/homeBg.png"

export default function Home({setValue}) {
// Small intro, display fortune api here only? or as footer across whole portfolio?


    // const[shadow,setShadow] = useState()
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          // backgroundColor:'rgba(52, 52, 52, 0.1)',
          color: 'white',
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
          // background: HomeBg,
          backgroundColor:'rgba(71, 71, 71, 0.1)',
          height:'100%',
          width:'100%',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          paddingTop: '25em'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
          color: 'white'
      
        },
        title: {
          fontSize: 28,
          color: 'white'
          
        },
        pos: {
          marginBottom: 12,
          color: 'white',
          fontSize: 32,
        },
        subtitle:{
          paddingTop: '10px'
        }
      });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
  return (
      <div className={classes.root}>
        
    <Card className={classes.card} variant="outlined" fontFamily="Monospace">
      <CardContent>
        <Typography className={classes.title} color="textSecondary"  gutterBottom>
          Hi My Name Is
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Edward
        </Typography>
        <Typography variant="body2" component="p">
          I am a 
          <br />
        </Typography>
        <Typography className={classes.subtitle} variant="h5" component="h2">
          Full{bull}Stack{bull}Developer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"onClick={()=>setValue(1)}>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
