const express = require('express')
const router = express.Router()
const Airport = require('../models/Airport.model')
const Company = require('../models/Company.model')
const Destination = require('../models/Destination.model')
const Review = require('../models/Review.model')

// mimddleware solo admin
router.post('/new/:id/:which', (req, res) => {

    const { which, id } = req.params

    Review.create(req.body)
        .then(response => {

            which === 'airport' ? Airport.findByIdAndUpdate(id, { $push: { reviews: response._id } })
                .then(response => res.json(response))
                .catch(err => console.log(err)) :

                which === 'company' ? Company.findByIdAndUpdate(id, { $push: { reviews: response._id } })
                    .then(response => res.json(response))
                    .catch(err => console.log(err)) :

                    which === 'destination' ? Destination.findByIdAndUpdate(id, { $push: { reviews: response._id } })
                        .then(response => res.json(response))
                        .catch(err => console.log(err)) :

                        res.status(500).json({ code: 500, message: 'Coleccion no encontrada no encontrada', err })

        })
        .catch(err => console.log(err))
})



router.put('/:id/:which/edit', (req, res) => {

    const { which, id, mark } = req.body

    console.log(which, id, mark)

            which === 'airport' ? Airport.findByIdAndUpdate(id, { $push: { reviews: req.body.mark } })
                .then(response => res.json(response))
                .catch(err => console.log(err)) :

                which === 'company' ? Company.findByIdAndUpdate(id, { $push: { reviews: req.body.mark } })
                    .then(response => res.json(response))
                    .catch(err => console.log(err)) :

                    which === 'destination' ? Destination.findByIdAndUpdate(id, { $push: { reviews: req.body.mark } })
                        .then(response => res.json(response))
                        .catch(err => console.log(err)) :

                        res.status(500).json({ code: 500, message: 'Coleccion no encontrada no encontrada', err })

})

router.delete('/:review_id/:which/:which_id/delete', (req, res) => {

    const { which_id, review_id, which } = req.params
    const reviewToDelete = Review.findByIdAndDelete(review_id)
    const whichReviewToDelete =

        which === 'airport' ? Airport.findByIdAndUpdate(which_id, { $pull: { reviews: review_id } }, { new: true }) :

            which === 'company' ? Company.findByIdAndUpdate(which_id, { $pull: { reviews: review_id } }, { new: true }) :

                which === 'destination' ? Destination.findByIdAndUpdate(which_id, { $pull: { reviews: review_id } }, { new: true }) :

                    res.status(500).json({ code: 500, message: 'Coleccion no encontrada no encontrada', err })

    Promise.all([reviewToDelete, whichReviewToDelete])
        .then((review, which2) => {
            res.json(which2)
        })
        .catch(err => console.log(err))

})


module.exports = router
