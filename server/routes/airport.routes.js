const express = require('express')
const router = express.Router()
const Airport = require('../models/Airport.model.js')


// get all airports
router.get('/airports', (req, res) => {
    console.log('llego')

    Airport.find()
        .then(response => res.json(response))
        .catch(err => console.log(err))
})


// airport data for searchbar

router.get('/airportsData/:string', (req, res) => {

    const { string } = req.params

    Airport.find({
        "$or": [
            { "name": { $regex: string, $options: 'i' } },
            { "iata": { $regex: string, $options: 'i' } },
            { "address.city": { $regex: string, $options: 'i' } },
            { "address.state": { $regex: string, $options: 'i' } },
            { "address.country": { $regex: string, $options: 'i' } },
        ]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error searching airports', err }))
})


//   Airport ID and Update

router.put('/:airportId/edit', (req, res) => {

    Airport.findByIdAndUpdate(req.params.airportId, req.body, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing airport', err }))
})


// delete airport

router.delete('/:airportId/delete', (req, res) => {

    Airport.findByIdAndRemove(req.params.airportId)
        .then(response => res.status(200).json({ code: 200, message: `${response.name} Airport deleted` }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting airport', err }))
})


// search airport by string passed

router.get('/search/:string', (req, res) => {

    const { string } = req.params

    Airport.find({
        "$or": [
            { "name": { $regex: string, $options: 'i' } },
            { "iata": { $regex: string, $options: 'i' } }
        ]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error searching airport', err }))
})


//   /airport/:airport:\_id/edit GET

router.get('/:airportId', (req, res) => {

    Airport.findById(req.params.airportId)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error getting the airport', err }))

})



module.exports = router
