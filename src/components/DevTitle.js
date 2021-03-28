import React,{useState,useEffect} from 'react'
import {Typography} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles'

export default function DevTitle({value}) {
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
  const [isLooping, setIsLooping] = useState(false)
  
useEffect(()=>{
  if(value===0 && !isLooping){
    setIsLooping(true);
    for(let i =0; i < titles.length; i++){
      changeTitles(i);
    }
  }
},[value])


  let changeTitles = (i) => {
    setTimeout(()=>{
    if(index < titles.length){
      setIndex(i)
      if(titles[i].name === "Software"){
        setIsLooping(false)
      }
    }
  },2000 * (i + 1))

  }

  const useStyles = makeStyles(theme =>({
        title:{
          paddingTop: '10px',
          fontSize: '5rem',
          [theme.breakpoints.down("sm")]:{
            fontSize: '4rem'
          }
        },
        subTitle:{
          fontSize:'3rem',
          color:"white"
        }
      }));

    const classes = useStyles();

    const theme = createMuiTheme({
      palette:{
        primary:{
          main: "#43C6DB",
          secondary: "white"
        },
        secondary:{
          main: "#DB5844"
        }
      }
    })
    return (
        <>
        <ThemeProvider theme={theme}>
            <Typography className={classes.title} color={titles[index].color} component="h2">
                <strong>{titles[index].name} </strong>
            </Typography>
            <h2 className={classes.subTitle} >Developer</h2>
          </ThemeProvider>

        </>
    )
}
