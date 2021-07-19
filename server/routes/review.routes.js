const express = require('express')
const router = express.Router()
const Airport = require('../models/Airport.model')
const Company = require('../models/Company.model')
const Destination = require('../models/Destination.model')
const Review = require('../models/Review.model')

// mimddleware solo admin
router.post('/new/:id/:which', (req, res) => {

    const {which, id} = req.params

    Review.create(req.body)
        .then(response => {


            // if (which === 'airport') {
            //      Airport.findByIdAndUpdate(id, {$push:{reviews:response._id}})
            //         .then(response  =>  res.send(response))
            //         .catch(err => console.log(err))
            // }
            
            which === 'airport' ? Airport.findByIdAndUpdate(id, {$push:{reviews:response._id}})
                .then(response  =>  res.json(response))
                .catch(err => console.log(err)) :
                
                which === 'company' ? Company.findByIdAndUpdate(id, {$push:{reviews:response._id}})
                    .then(response  =>  res.json(response))
                    .catch(err => console.log(err)) :
                    
                    which === 'destination' ? Destination.findByIdAndUpdate(id, {$push:{reviews:response._id}})
                        .then(response  =>  res.json(response))
                        .catch(err => console.log(err)) :
                        
                        res.status(500).json({ code: 500, message: 'Coleccion no encontrada no encontrada', err })
            
        })
        .catch(err => console.log(err))
})

module.exports = router
