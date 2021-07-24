const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('./../models/User.model')
const Company = require('../models/Company.model')
const multerUpload = require('../config/cloudinary.config')


router.post('/new', (req, res) => {


    const { companyName, logo, document, userId } = req.body

    const companyAddress = { street, number, zipCode, city, country } = req.body


    Company.findOne({ companyName })
        .then(company => {
            if (company) {
                res.status(400).json({ code: 400, message: 'Company already exist' })
                return
            }

            Company.create({ companyName, logo, document, moderator: userId, companyAddress })
                .then(response => {
                    res.status(201).json({ code: 201, message: 'Company created', data: response })

                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})




// ----------------------------------------------------




router.post('/signup', (req, res) => {


    console.log(req.body)


    // // pending profileImg

    const { isCompany } = req.params
    // company data
    const { companyName, logo } = req.body

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



router.get('/logout', (req, res) => {
    req.session.destroy(err => res.json({ mssage: 'Logout successful' }))
})



router.post('/isLoggedIn', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

module.exports = router
