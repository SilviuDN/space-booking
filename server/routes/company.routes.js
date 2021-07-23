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

router.get('/', (req, res) => {

    Company
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})


module.exports = router