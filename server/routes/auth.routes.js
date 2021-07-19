const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const bcryptSalt = 10

const User = require('./../models/User.model')
const Company = require('../models/Company.model')

// SignUp (post)

router.post('/signup/:isCompany', (req, res) => {

    const {isCompany} = req.params

    // company data
    const {companyName, logo} = req.body

    // user data
    const { email, pwd, name, surname, personalId, typeOfId, phone, flights, role, profileImg } = req.body
    const address = ({ street, number, zipCode, city, country } = req.body)

    
    User.findOne({ email })
        .then(user => {
            if (user) {
                res.status(400).json({ code: 400, message: 'User already exixts' })
                return
            }

            const bcryptSalt = 10
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(pwd, salt)

            User.create({ email, password: hashPass, address, name, surname, personalId, typeOfId, phone, flights, role, profileImg })
                .then((response) => {

                    if(isCompany === 'true') {
                        
                        Company.create({ companyName, logo, moderator: response._id }) 
                        .then(() => res.status(200).json({ code: 200, message: 'Inserted correctly' }))
                        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Company', err }))
                        
                    }else{                       

                    res.status(200).json({ code: 200, message: 'User created but' })

                    }
                })
                .catch(err => console.log(err))

        })  
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})





// Login(post)

router.post('/login', (req, res) => {
    const { email, pwd } = req.body

    User.findOne({ email })
        .then(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'User not registered' })
                return
            }

            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorect password' })
                return
            }

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
