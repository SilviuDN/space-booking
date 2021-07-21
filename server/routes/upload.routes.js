const express = require('express')
const router = express.Router()
const multerUpload = require('../config/cloudinary.config')


// subiendo la imagen
router.post('/', multerUpload.single('file'), (req, res) => {

    res.json({ imageUrl: req.file.path })

})


module.exports = router