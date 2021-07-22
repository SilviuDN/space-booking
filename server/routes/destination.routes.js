const express = require('express')
const router = express.Router()
const Destination = require('../models/Destination.model')


router.get('/:destination_id', (req, res) => {

    Destination
        .findById(req.params.destination_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching destination', err }))
})

router.post('/new', (req, res) => {

    const { name, description, image } = req.body
    console.log(image)

    // Destination
    //     .findOne({ name })
    //     .then(destination => {

    //         Destination
    //             .create({ name, description, image })
    //             .then(() => res.status(200).json({ code: 200, message: 'Destination created' }))
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))

    Destination
        .findOne({ name: name })
        .then(destination => {
            if (destination) {
                res.status(400).json({ code: 400, message: 'Destination already exixts' })
                return
            }

            Destination
                .create({ name, description, image })
                .then(() => res.status(200).json({ code: 200, message: 'Destination created' }))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

router.get('/:destination_id/edit', (req, res) => {

    Destination
        .findById(req.params.destination_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching destination', err }))
})

router.put('/:destination_id/edit', (req, res) => {
    const { name, description, image } = req.body

    Destination
        .findByIdAndUpdate(req.params.destination_id, { name, description, image }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing destination', err }))
})

router.delete('/:destination_id/delete', (req, res) => {
    Destination
        .findByIdAndRemove(req.params.destination_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting destination', err }))
})

router.get('/:destination_id/details', (req, res) => {

    Destination
        .findById(req.params.destination_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching destination', err }))
})

router.get('/', (req, res) => {

    Destination
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching destination', err }))
})



module.exports = router