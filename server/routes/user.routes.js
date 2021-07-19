const express = require('express')
const router = express.Router()

const User = require('../models/User.model')


// router.get('/getAllUsers', (req, res) => {

//     User
//         .find()
//         .select('name')
//         .sort({ createdAt: 1 })
//         .then(response => setTimeout(() => res.json(response), 200))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
// })


router.get('/getOneUser/:user_id', (req, res) => {

    User
        .findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})



router.put('/editUser/:user_id', (req, res) => {

    const user = req.body

    User
        .findByIdAndUpdate(req.params.user_id, user)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing users', err }))
})


module.exports = router