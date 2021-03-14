import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    height:'100%',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
//This page doesnt slide to the left because of some bug swipeable views has

export default function Projects() {
  const classes = useStyles();
  // const projectInfo =[
  //     {
  //         name:"",
          
  //     }
  // ]

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3} >
          <Paper className={classes.paper}>
              <ProjectCard/>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>              
            <ProjectCard/>
        </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
              <ProjectCard/>
        </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}>
              <ProjectCard/>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
