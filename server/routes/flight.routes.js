// /flight/ GET
// / flight / new POST
// / flight /: flight_id / edit GET
// / flight /: flight_id / edit PUT
// / flight /: flight_id / delete DELETE
// / flight / search GET

const express = require('express')
const router = express.Router()
const Flight = require('../models/Flight.model')

router.get('/flights', (req, res) => {
    Flight.find()
        .populate('destination')
        .sort({ createdAt: 1 })
        .then(response => res.json(response)
        )
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
})

router.post('/new', (req, res) => {

    const { price, capacity, flightNumber, airport, destination, date, flightCompany } = req.body
    console.log(price, capacity)

    Flight
        .findOne({ flightNumber })
        .then(flight => {

            Flight
                .create({ price, capacity, flightNumber, airport, destination, date, flightCompany })
                .then(() => res.status(200).json({ code: 200, message: 'Flight created' }))
                .catch(err => console.log(err))

        })
        .catch(err => console.log(err))
})

//     Flight
//         .findOne({ flightNumber })
//         .then(flight => {
//             if (flight) {
//                 res.status(400).json({ code: 400, message: 'Flight already exixts' })
//                 return
//             } else {
//                 Flight
//                     .create({ price, capacity, flightNumber, airport, destination, date, flightCompany })
//                     .then(() => res.status(200).json({ code: 200, message: 'Flight created' }))
//                     .catch(err => console.log(err))
//             }
//         })
//         .catch(err => console.log(err))
// })

router.get('/:flight_id', (req, res) => {

    Flight
        .findById(req.params.flight_id)
        // .populate('destination')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching flight', err }))
})


router.put('/:flight_id/edit', (req, res) => {
    console.log(req.body)
    const { price, capacity, flightNumber, airport, destination, date, flightCompany } = req.body

    Flight
        .findByIdAndUpdate(req.params.flight_id, { price, capacity, flightNumber, airport, destination, date, flightCompany }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing destination', err }))
})

router.delete('/:flight_id/delete', (req, res) => {
    console.log("Dentro de la ruta ", req.params.flight_id)

    Flight
        .findByIdAndRemove(req.params.flight_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting destination', err }))
})


module.exports = router