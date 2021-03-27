import React from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'90%',
    alignItems: 'center',
    justifyContent:'center',
    [theme.breakpoints.down('xs')]:{
      maxHeight:'90vh',
    },
    
    [theme.breakpoints.up('sm')]:{
      display: 'flex'
    },
  },
  grid:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  },
  paper: {
    [theme.breakpoints.up('md')]:{
      width: '50%',
      fontSize:'0.8em'
    },    
    fontSize:'0.3em',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
//This page doesnt slide to the left because of some bug swipeable views has
//@ToDo loop through an array in State of the names, descriptions and links to the github for every project that is being used.
export default function Projects() {
  const classes = useStyles();
  const projectInfo =[
      {
          name:"Movie Insights",
          description: "Website consuming the IMDB api to get information about any movie, its actors, revenue and description, etc.",
          gitUrl: "https://github.com/eguerrero-stack/react-rmdb-deploy"
          
      },
      {
        name:"Pokemon Battles",
        description: "Powered by PokeApi, battle  Pokemon across any generation including stats and learnable Abilities.",
        gitUrl: "https://github.com/eguerrero-stack/pokemon-app"
    },
    {
      name:"Leave Management",
      description: "Handle all employees requested leave applications in one place.",
      gitUrl:"https://github.com/eguerrero-stack/leave-management"
      
  },
  {
    name: "Personal Portfolio",
    description:"Personal website showcasing all that is me using Material UI and React.",
    gitUrl: "https://github.com/eguerrero-stack/react-portfolio"

  }
  ]

  return (
    <div className={classes.root}>
      <Grid container >
        {projectInfo.map((p,index) => {
        return  (<Grid item xs={12} sm={6} key={index} className={classes.grid}>
              <Paper className={classes.paper}>
                  <ProjectCard name={p.name} description={p.description} gitUrl={p.gitUrl} />
              </Paper>
            </Grid>
        )
        })}
      </Grid>
    </div>
  );
}
