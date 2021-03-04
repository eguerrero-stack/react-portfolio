import React from 'react'
import Navbar from './components/Navbar'
// import Background from './components/Background'
import Grid from '@material-ui/core/Grid'
import "./components/Background.css"

function App() {
  return (
      <Grid container xs={12}>
          <div className="background">
            <Navbar/>
          </div>
      </Grid>
  );
}

export default App;
