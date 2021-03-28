import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Contact() {
  //@Todo add email functionality
 const useStyles = makeStyles(theme => ({
     root:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        display:'flex',
        textAlign:'center',
        [theme.breakpoints.down('xs')]:{

          margin:'10px'
        }
     },
     fields:{
         margin: theme.spacing(1)
     },
     card:{
       margin: theme.spacing(2),
       padding: theme.spacing(1),
      //  height: '50vh'
     }
 }))
const classes = useStyles();
  return (
      <div className={classes.root}>
          <Paper elevation={3}>
            <Card className={classes.card}>
              <Typography variant="h4">Let's Connect!</Typography>
            <FormControl >
                <div > 
                    <TextField className={classes.fields} required label="Name" />
                      <TextField className={classes.fields} required label="Phone Number" />
                </div>
                <TextField required label="Message" multiline rows={10} style={{paddingTop:'20px'}}/>
            <Button  variant="outlined"color="primary" onClick={()=> console.log('hello im here')}>Send</Button>
            </FormControl>
            </Card>
            </Paper>
    </div>
  );
}