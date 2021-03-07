import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
export default function Contact() {
 const useStyles = makeStyles(theme => ({
     root:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
     },
     fields:{
         margin: theme.spacing(1)
     }
 }))
const classes = useStyles();
  return (
      <div className={classes.root}>
          <Paper elevation={3}>
            <FormControl>
                <div > 
                <TextField className={classes.fields} required label="Required" />
                <TextField className={classes.fields} required label="Required" />
                </div>
                <TextField required label="Required" multiline rows={5} />
            </FormControl>
            </Paper>
    </div>
  );
}