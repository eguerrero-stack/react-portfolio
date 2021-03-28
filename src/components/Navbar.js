import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Home from './Home'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    
    width: '100vw',
    position: 'fixed'
  },
  label:{
    fontWeight: 'bold',
    color:"white",
    [theme.breakpoints.up("sm")]:{
      fontSize:"1.2em"

    }
  },
  navBar:{
    backgroundColor: '#202020',
    color: "white",
  }
}));

export default function Navbar() {
    
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit"className={classes.navBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={<span className={classes.label}>Home</span>}/>
          <Tab label={<span className={classes.label}>About</span>}  />
          <Tab label={<span className={classes.label}>Projects</span>} />
          <Tab label={<span className={classes.label}>Contact</span>}  />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <Home value={value} index={0} dir={theme.direction} setValue={setValue} />
          <About  value={value} index={1} dir={theme.direction}/>
          <Projects  value={value} index={2} dir={theme.direction}/>
          <Contact value={value} index={3} dir={theme.direction}/>
      </SwipeableViews>
    </div>
  );
}
