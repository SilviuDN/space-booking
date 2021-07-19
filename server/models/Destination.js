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
        type: mongoose.Schema.Types.ObjectId, ref: 'Review'
    }],


    image: {
        type: String //cloudinary
    },



},
    {
        timestamps: true
    });

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;