import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function Home() {
    // const[shadow,setShadow] = useState()
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          backgroundColor:'rgba(52, 52, 52, 0.1)',
          color: 'white',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          height:'90vh',
      
        },
        card:{
          backgroundColor:'rgba(52, 52, 52, 1)',
          height:'50%',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
          color: 'white'
      
        },
        title: {
          fontSize: 14,
          color: 'white'
          
        },
        pos: {
          marginBottom: 12,
          color: 'white'
      
        },
      });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
  return (
      <div className={classes.root}>
    <Card className={classes.card} variant="outlined" >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hi My Name Is
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Edward
        </Typography>
        <Typography variant="body2" component="p">
          I am a 
          <br />
        </Typography>
        <Typography variant="h5" component="h2">
          Full{bull}Stack{bull}Developer{bull}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
