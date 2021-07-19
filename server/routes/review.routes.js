const express = require('express')
const router = express.Router()
const Airport = require('../models/Airport.model')
const Company = require('../models/Company.model')
const Destination = require('../models/Destination.model')
const Review = require('../models/Review.model')

// mimddleware solo admin
router.get('/new/:id/:which', (req, res) => {

    const {wich, id} = req.params

    Review.create(body)
        .then(response => {

            
            which === 'airport' ? Airport.findByIdAndUpdate(id, {$push:{reviews:response._id}}) :
            which === 'company' ? Company.findByIdAndUpdate(id, {$push:{reviews:response._id}}) :
            which === 'destination' ? Destination.findByIdAndUpdate(id, {$push:{reviews:response._id}}) :
            res.status(500).json({ code: 500, message: 'Coleccion no encontrada no encontrada', err })
            
        })
        .catch(err => console.log(err))
})

module.exports = router
