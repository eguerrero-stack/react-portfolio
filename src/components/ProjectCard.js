import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Img from '../images/skyline.jpg'
const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    // [theme.breakpoints.up("sm")]: {
    //   height: '350px',
    // },
    // height:'200px',
    margin: '5px',
    // height: '80%'
  },
  media: {
    height: '50%',
  },
  cardActions:{
    justifyContent:'space-evenly',
  }
}));

export default function ProjectCard({name, description,gitUrl}) {
  const classes = useStyles();
  const theme = useTheme();
  const sizing = useMediaQuery(theme.breakpoints.down('xs'))
  console.log(sizing)
  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          component="img"
          className={classes.media}
          title="My Project"
          src={Img}
        />
        <CardContent>
          
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary">
          Website
        </Button>
        <Button size="small" variant="contained" color="primary" href={gitUrl} >
          Github
        </Button>
      </CardActions>
    </Card>
  );
}