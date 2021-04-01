#!/usr/bin/env node
const express = require('express');
const port = process.env.port || 5000;
const app = express();
const cors = require('cors');
const sendMail = require('./mailer')

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

