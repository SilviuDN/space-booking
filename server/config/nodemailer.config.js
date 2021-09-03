const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAIL_USER,
        pass: process.env.NODEMAIL_PASS,
    },
})

module.exports = transporter
