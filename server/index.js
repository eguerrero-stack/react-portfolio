#!/usr/bin/env node
const express = require('express');
const port = process.env.port || 5000;
const app = express();
const cors = require('cors');
const { jssPreset } = require('@material-ui/core');
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
// app.use(cors());

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});

app.post('/',cors(),(req,res) => {
    const sampleMail = {
        from: "sample@sample",
        to: "edward@edward",
        message:"You're hired"
    }
 res.send(JSON.stringify(sampleMail))
})

