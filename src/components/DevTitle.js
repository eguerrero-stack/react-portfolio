import React,{useState,useEffect} from 'react'
import {Typography} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles'

export default function DevTitle({value}) {
    //@ToDo have the loop be clickable
    //
  const [titles,setTitles] = useState([
    {name:'Full Stack',
    color:'primary'},
   {name:'Front End',
    color:'secondary'},
   {name:'Back End',
  color:'primary'},
    {name:'React',
  color:'secondary'},
     {name:'.Net',
    color:'primary'},
      {name:'Node',
    color:'secondary'},
       {name:'Software',
      color:'primary'}]);
  const [index,setIndex] =useState(0)
  
useEffect(()=>{
  // if(titles !== typeof Array) return
  console.log('titles',titles)
  console.log('values', value)
  if(value===0){
    for(let i =0; i < titles.length; i++){
      changeTitles(i);
    }
  }
},[value])


  let changeTitles = (i) => {
    setTimeout(()=>{
    console.log('setting new index', titles[i])
    if(index < titles.length){
      setIndex(i)
    }
  },2000 * (i + 1))

  }

  const useStyles = makeStyles({
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
            color: 'black'
        
          },
        subtitle:{
          paddingTop: '10px',
          fontSize: '4rem'
        }
      });

    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const theme = createMuiTheme({
      palette:{
        primary:{
          main: "#43C6DB"
        },
        secondary:{
          main: "#DB5844"
        }
      }
    })
    return (
        <>
        <ThemeProvider theme={theme}>
            <Typography className={classes.subtitle} color={titles[index].color} component="h2">
                {titles[index].name} Developer
            </Typography>
          </ThemeProvider>

        </>
    )
}
