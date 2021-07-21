const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/User.model')

router.get('/:user_id/details', (req, res) => {
    User.findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.put('/:user_id/edit', (req, res) => {
    console.log("Holaaaaaaaa")
    const { email, name, surname, personalId, typeOfId, phone, flights, role, profileImg } = req.body// reminder add password : pwd
    const address = ({ street, number, zipCode, city, country } = req.body)
    console.log(req.body)
    // const user = req.body

    // const bcryptSalt = 10
    // const salt = bcrypt.genSaltSync(bcryptSalt)
    // const hashPass = bcrypt.hashSync(pwd, salt)

    User.findByIdAndUpdate(req.params.user_id, { email, name, surname, personalId, typeOfId, phone, flights, role, profileImg, address }, { new: true }) // reminder add password : hashPass
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing users', err }))
})

router.delete('/:user_id/delete', (req, res) => {
    User.findByIdAndRemove(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting user', err }))
})

router.get('/', (req, res) => {
    User.find()
        .select('name')
        .sort({ createdAt: 1 })
        .then(response =>
            setTimeout(() => {
                console.log(response)
                res.json(response), 200
            })
        )
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
})

module.exports = router
