const express = require('express')
const router = express.Router()
const Company = require('../models/Company.model')
const User = require('../models/User.model')
const mongoose = require('mongoose')


router.post('/new', (req, res) => {

    const { companyName, logo, document, userId } = req.body

    const companyAddress = { street, number, zipCode, city, country } = req.body

    Company.findOne({ companyName })
        .then(company => {
            if (company) {
                res.status(400).json({ code: 400, message: 'Company already exist' })
                return
            }

            Company.create({ companyName, logo, document, moderator: userId, companyAddress })
                .then(response => {
                    res.status(201).json({ code: 201, message: 'Company created', data: response })

                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})



router.get('/:company_id/company', (req, res) => {
    Company
        .findById(req.params.company_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})



router.put('/:company_id/edit', (req, res) => {

    const { companyName, logo, document } = req.body
    const companyAddress = { street, number, zipCode, city, country } = req.body

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

    Company.find({
        "$or": [{
            "companyName": { $regex: string, $options: 'i' }
        }]
    })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error filtering companiesr', err }))
})


router.get('/myCompany/:userId', (req, res) => {

    const { userId } = req.params

    console.log(userId)

    Company.find({ moderator: new mongoose.Types.ObjectId(userId) })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Company not found', err }))
})




router.put('/setStatus/:companyId/:moderatorId', (req, res) => {

    const { companyId, moderatorId } = req.params
    const { status } = req.body

    const userRole = status ? 'moderator' : 'user'

    const company = Company.findByIdAndUpdate(companyId, { status }, { new: true })
    const user = User.findByIdAndUpdate(moderatorId, { role: userRole }, { new: true })

    Promise.all([company, user])
        .then(({ company, user }) => res.json(company))
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