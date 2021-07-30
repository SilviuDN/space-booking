const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },

    description: {
        type: String,
        // required: true,
    },

    reviews: [{
        type: Number,
    }],


    image: {
        type: String //cloudinary
    },
    code: {
        type: String
    }



},
    {
        timestamps: true
    });

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;