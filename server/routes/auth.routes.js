const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('./../models/User.model')
const Transporter = require('./../config/nodemailer.config')
const { randomToken, emails } = require('../utils')
// const Company = require('../models/Company.model')
// const multerUpload = require('../config/cloudinary.config')





router.post('/signup', (req, res) => {


    // user data
    const { email, pwd, name, surname, personalId, typeOfId, phone } = req.body
    const address = { street, number, zipCode, city, country } = req.body


    User.findOne({ email: email })
        .then(user => {
            // console.log('find user--> ', user)
            if (user) {
                res.status(400).json({ code: 400, message: 'User already exixts' })
                return
            }

            // console.log('second then')

            const bcryptSalt = 10
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(pwd, salt)
            console.log(hashPass)

            User.create({ email, password: hashPass, name, surname, personalId, typeOfId, phone, address })
                .then((response) => {

                    res.status(200).json({ code: 200, message: 'User created correctly', response })

                })
                .catch(err => console.log(err))

        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})







// Login(post)

router.post('/login', (req, res) => {

    const { email, pwd } = req.body

    User.findOne({ email: email })
        .populate({
            path: 'flights',
            model: 'Flight',
            populate: [{
                path: 'airport',
                model: 'Airport'
            }, {
                path: 'destination',
                model: 'Destination'
            }, {
                path: 'flightCompany',
                model: 'Company'
            }]
        })
        .then(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'User not registered' })
                return
            }

            if (!bcrypt.compareSync(pwd, user.password)) {
                res.status(401).json({ code: 401, message: 'Incorect password' })
                return
            }

            console.log(user)
            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})



router.post('/pass/recover/:email', (req, res) => {

    const { email } = req.params

    const token = randomToken(20)

    User.findOneAndUpdate({ email }, { token })
        .then(response => {
            if (!response) {
                res.status(404).json({ code: 404, message: 'User not found' })
                return
            }


            const email = emails(response, req)

            // console.log(email)

            Transporter
                .sendMail(email)
                .then(() => res.json({ message: `Email sent to ${response.email}`, response }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))



        })
        .catch(err => console.log(err))
})



router.get('/logout', (req, res) => {
    req.session.destroy(err => res.json({ message: 'Logout successful' }))
})



router.post('/isLoggedIn', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router
