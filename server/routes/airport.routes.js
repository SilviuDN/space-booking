const express = require('express')
const router = express.Router()
const Airport = require('../models/Airport.model.js')


// create new airport
// router.post('/new', (req, res) => {

//     console.log(req.body)

//     const {iata, name, lat, lon} = req.body
//     const address = {street, number, zipCode, city, state, country } = req.body

//     Airport.create({iata, name, address, lat, lon})
//         .then(response  =>  res.send(response))
//         .catch(err => console.log(err))

// })

// get all airports
router.get('/airports', (req, res) => {
    Airport.find()
        .limit(100)
        .then(response => res.send(response))
        .catch(err => console.log(err))
})


//   /airport/:airport:\_id/edit GET

router.get('/:airportId', (req, res) => {

    Airport.findById(req.params.airportId)
        .then(response => res.json(response))
        .catch(err => console.log(err))

})
//   Airport ID and Update

router.put('/:airportId/edit', (req, res) => {

    // check if we need full req body or to extract the params, for nested objects

    Airport.findByIdAndUpdate(req.params.airportId, req.body, { new: true })
        .then(response => res.send(response))
        .catch(err => console.log(err))
})


router.delete('/:airportId/delete', (req, res) => {

    Airport.findByIdAndRemove(req.params.airportId)
        .then(response => res.status(200).json({ code: 200, message: `${response.name} Airport deleted` }))
        .catch(err => console.log(err))
})

module.exports = router
