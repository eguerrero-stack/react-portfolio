import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
// import Background from './components/Background'
import Grid from '@material-ui/core/Grid'
import "./components/Background.css"

function App() {
//    const [fortune,setFortune] = useState({})

//   const getFortune = () =>{
//     fetch('http://localhost:9000/fortunes/random')
//     .then(res => res.json())
//     .then(f => console.log(f))
//     .then(f => setFortune(f))
//   }

// useEffect(()=>{
  
//   if(JSON.stringify(fortune) === '{}') getFortune();
// })



  return (
      <Grid container >
          <div className="background">
            <Navbar/>
          </div>
      </Grid>
  );
}

export default App;
