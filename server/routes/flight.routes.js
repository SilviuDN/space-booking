const express = require('express')
const router = express.Router()
const Flight = require('../models/Flight.model')
const mongoose = require('mongoose')



router.get('/flights', (req, res) => {

    Flight
        .find()
        .populate('destination flightCompany airport')
        .sort({ createdAt: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching users', err }))
})



router.post('/new', (req, res) => {

    const { price, capacity, flightNumber, airport, destination, date, flightCompany } = req.body

    Flight
        .findOne({ flightNumber })
        .then(flight => {

            if (flight) {
                res.status(400).json({ code: 400, message: 'Flight already exixts' })
                return
            }

            return Flight
                .create({ price, capacity, flightNumber, airport, destination, date, flightCompany })

        })
        .then(flight => res.status(201).json({ code: 201, message: 'Flight created', flight }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error Creating flight', err }))
})



router.get('/:flight_id', (req, res) => {

    Flight
        .findById(req.params.flight_id)
        .populate('destination flightCompany airport')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching flight', err }))
})



router.put('/:flight_id/edit', (req, res) => {

    const { price, capacity, flightNumber, airport, destination, date, flightCompany } = req.body

    Flight
        .findByIdAndUpdate(req.params.flight_id, { price, capacity, flightNumber, airport, destination, date, flightCompany }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing destination', err }))
})



router.delete('/:flight_id/delete', (req, res) => {

    Flight
        .findByIdAndRemove(req.params.flight_id)
        .then(() => res.json({ message: 'Error deleting destination' }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting destination', err }))
})



router.get('/search/travels/:airport/:destination/:fromDate/:toDate', (req, res) => {

    const { airport, destination, fromDate, toDate } = req.params

    const queryArray = [];

    // pushing every data received to new array if not undefined
    fromDate !== 'undefined' ? queryArray.push({ "date": { $gte: new Date(fromDate) } }) : null
    toDate !== 'undefined' ? queryArray.push({ "date": { $lte: new Date(toDate) } }) : null
    airport !== 'undefined' ? queryArray.push({ "airport": new mongoose.Types.ObjectId(airport) }) : null
    destination !== 'undefined' ? queryArray.push({ "destination": new mongoose.Types.ObjectId(destination) }) : null

    // if something in the array will do the find with that data else all
    Flight
        .find(queryArray.length ? { $and: queryArray } : {})
        .populate('destination flightCompany airport')
        .sort({ date: 1 })
        .then(response => res.json(response.filter(flight => flight.flightCompany?.status === true)))
        .catch(err => res.status(404).json({ code: 404, message: 'no flights found', err }))
})



router.get('/search/avail/flights/:destination', (req, res) => {

    const { destination } = req.params

    Flight
        .find({ "destination": new mongoose.Types.ObjectId(destination) })
        .populate('airport flightCompany')
        .then(response => res.json(response.filter(flight => flight.flightCompany?.status === true)))
        .catch(err => res.status(404).json({ code: 404, message: 'No flight found', err }))
})



router.get('/search/:string', (req, res) => {

    const { string } = req.params

    Flight
        .find({ "flightNumber": { $regex: string, $options: 'i' } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error filtering flights', err }))
})



module.exports = router