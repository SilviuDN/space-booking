const express = require('express')
const router = express.Router()
const Flight = require('../models/Flight.model')
const mongoose = require('mongoose')



router.get('/flights', (req, res) => {
    Flight.find()
        .populate('destination flightCompany airport')
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
            if (flight) {
                res.status(400).json({ code: 400, message: 'Flight already exixts' })
                return
            } else {
                Flight
                    .create({ price, capacity, flightNumber, airport, destination, date, flightCompany })
                    .then(() => res.status(200).json({ code: 200, message: 'Flight created' }))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})



router.get('/:flight_id', (req, res) => {

    Flight
        .findById(req.params.flight_id)
        .populate('destination')
        .populate('flightCompany')
        .populate('airport')
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



router.get('/search/travels/:airport/:destination/:depDate/:retDate', (req, res) => {

    const { airport, destination, depDate, retDate } = req.params

    console.log(airport, destination, depDate, retDate)

    if (depDate !== 'undefined' && retDate !== 'undefined') {

        const fromDate = new Date(depDate)
        const toDate = new Date(retDate)

        Flight
            .find({
                $and: [{ "airport": new mongoose.Types.ObjectId(airport) }, { "destination": new mongoose.Types.ObjectId(destination) },
                { "date": { $gte: fromDate } }, { "date": { $lte: toDate } }]
            })
            .populate('destination')
            .populate('flightCompany')
            .populate('airport')
            .then(response => res.json(response))
            .catch(err => console.log(err))
    } else {

        const today = new Date()

        Flight
            .find({
                $and: [{ "airport": new mongoose.Types.ObjectId(airport) }, { "destination": new mongoose.Types.ObjectId(destination) }, { "date": { $gte: today } }]
            })
            .populate('destination')
            .populate('flightCompany')
            .populate('airport')
            .then(response => res.json(response))
            .catch(err => console.log(err))

    }

})



router.get('/search/avail/flights/:destination', (req, res) => {

    const { destination } = req.params

    Flight
        .find({
            "destination": new mongoose.Types.ObjectId(destination)
        })
        .populate('airport')
        .then(response => res.send(response))
        .catch(err => console.log(err))
})



router.get('/search/:string', (req, res) => {
    const { string } = req.params


    Flight.find({
        "$or": [
            { "flightNumber": { $regex: string, $options: 'i' } },
        ]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error filtering flights', err }))
})





module.exports = router