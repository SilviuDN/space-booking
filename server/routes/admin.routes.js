const express = require('express')
const router = express.Router()

const User = require('../models/User.model')

// mimddleware solo admin
router.get('/users', (req, res) => {
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
