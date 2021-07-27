const express = require('express')
const router = express.Router()
const Company = require('../models/Company.model')


router.post('/new', (req, res) => {



    Company.create({ companyName, logo, moderator: response._id })
        .then(() => res.status(200).json({ code: 200, message: 'Company Inserted' }))
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating Company', err }))

})



router.get('/:company_id/company', (req, res) => {
    Company
        .findById(req.params.company_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})



router.put('/:company_id/edit', (req, res) => {
    const { companyName, logo, document } = req.body
    console.log(logo)
    const companyAddress = ({ street, number, zipCode, city, country } = req.body)
    console.log(companyAddress, companyName, logo)

    Company
        .findByIdAndUpdate(req.params.company_id, { companyName, logo, document, companyAddress }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing company', err }))
})

router.delete('/:company_id/delete', (req, res) => {
    Company.findByIdAndRemove(req.params.company_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting company', err }))
})




router.get('/search/:string', (req, res) => {
    const { string } = req.params

    console.log(string)

    Company.find({
        "$or": [{
            "companyName": { $regex: string, $options: 'i' }
        }]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error filtering companiesr', err }))
})


router.put('/setStatus/:companyId', (req, res) => {
    const { companyId } = req.params
    const { status } = req.body


    Company.findByIdAndUpdate(companyId, { status }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error setting status', err }))
})


router.get('/:status', (req, res) => {

    const { status } = req.params

    Company
        .find(status === 'true' ? { status: true } : { status: false })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})


module.exports = router