const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User.model')



router.put('/:user_id/edit', (req, res) => {

    const query = req.body.user

    User.findByIdAndUpdate(req.params.user_id, query, { new: true }) // reminder add password : hashPass
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing users', err }))
})




router.put('/:userId/bought/:flightId/edit', (req, res) => {

    const { userId, flightId } = req.params

    User.findByIdAndUpdate(userId, { $push: { flights: flightId } }, { new: true })
        .then(response => res.json({ message: 'Error setting the flight in user', err }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error setting the flight in user', err }))
})





router.get('/:user_id/details', (req, res) => {
    User.findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
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
                res.json(response), 200
            })
        )
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
})


router.get('/search/:string', (req, res) => {

    const { string } = req.params

    User.find({
        "$or": [
            { "name": { $regex: string, $options: 'i' } },
            { "surname": { $regex: string, $options: 'i' } },
            { "email": { $regex: string, $options: 'i' } }
        ]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error filtering users', err }))
})


router.put('/:user_id/:flight_id/rate', (req, res) => {
    console.log('funciona!')
    User.findByIdAndUpdate(req.params.user_id, { $push: { ratedFlights: req.params.flight_id } }, { new: true }) // reminder add password : hashPass
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing users', err }))
})

module.exports = router
