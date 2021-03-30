#!/usr/bin/env node
const express = require('express');
const port = process.env.port || 5000;
const app = express();
const cors = require('cors');
const sendMail = require('./mailer')
/*@todo find free smtp server to use
The process would be to call the email service on form submit
Compile the email object and send it to api
Alert user if mail was sent (tiny little bookmark in corner of page would be perfect)
Clear fields


//this right here  is inside of nodemailer create transport options
tls:{
    rejectUnauthorized:false for using email service in localhost..maybe?
}
*/
app.use(cors());
//parses json, otherwise throws error that there is an unexpected end of input
app.use(express.json())
app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});


app.post('/send',(req,res) => {
    console.log(req.body, 'Node request ')
        if(!req.body) return res.send('It failed')
        sendMail(req.body)
        res.send(req.body)
})

