const nodemailer = require('nodemailer');
// const auth = require('./auth')
const dotenv = require('dotenv')
dotenv.config();
const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    secure: false,
    port:587,
    auth:{
        user:'apikey',
        pass: "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"
    },
    tls: {
        // ciphers:'SSLv3'
        rejectUnauthorized: false
     },
});

const setOptions = (data) =>{
    let config={
        from: "personalwebsite96@outlook.com",
        to: 'edwardgg805@gmail.com',
        subject: 'Reaching out from your website',
        html: `
        <h1>${data.name}</h1>
        <h3>${data.email}</h3>
        <p> ${data.message}</p>`
    }
    console.log(config)
    return config;
}


const sendMail = (data) =>{


transporter.sendMail(setOptions(data), (error,info) =>{
    if(error){
        console.log('This is the sendmail error: ',error)
    }else{
        console.log('Email sent:', info.response)
    }
})

}

module.exports = sendMail;;