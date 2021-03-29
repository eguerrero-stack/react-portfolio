const nodemailer = require('nodemailer');
const auth = require('./auth')

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth:{
        user:auth.user,
        password: auth.password
    }
});

const options = {
    from:
}