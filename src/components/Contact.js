import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function Contact() {
  //@Todo add email functionality
  //Would be cool to have address and icon, phone number and icon, email and icon above the form.
  




  const [name, setName] =useState('');
  const [email, setEmail]= useState('');
  const [message,setMessage]=useState('');
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
      
     }

 }))
const classes = useStyles();

const sendMail = (data) =>{
  console.log('sending mail',data)
  fetch('http://localhost:5000/send',{
    method:'POST',
    body: JSON.stringify(data),
    headers:{"Content-type" : "application/json"}
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

const setupEmail =(name,email,message) =>{

  const mailObj ={
    name,
    email,
    message,
  }
  
  sendMail(mailObj)
}


  return (
      <div className={classes.root}>
          <Paper elevation={3} >
            <Card className={classes.card}>
              <Typography variant="h4">Let's Connect!</Typography>
            <FormControl >
                <div style={{display:'flex'}} > 
                    <TextField className={classes.fields} required label="Name" onChange={e =>setName(e.target.value)} value={name}/>
                      <TextField className={classes.fields} label="Email"  onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <TextField className={classes.fields}required label="Message" multiline rows={10} style={{paddingTop:'20px'}} onChange={e => setMessage(e.target.value)} value={message}/>
            <Button className={classes.fields}  variant="outlined"color="primary" onClick={()=>setupEmail(name,email, message)}>Send</Button>
            </FormControl>
            </Card>
            </Paper>
    </div>
  );
}