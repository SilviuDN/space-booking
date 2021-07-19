const express = require('express')
const router = express.Router()
const Company = require('../models/Company.model')

router.get('/:company_id/edit', (req, res) => {
    Company
        .findById(req.params.company_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.put('/:company_id/edit', (req, res) => {
    const { companyName, logo, document } = req.body
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

module.exports = router