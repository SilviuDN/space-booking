const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'salucsaluc22',
        pass: 'SalucSaluc!22',
    },
})

module.exports = transporter
