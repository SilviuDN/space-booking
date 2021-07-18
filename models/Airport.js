// seed json https://gist.github.com/tdreyno/4278655

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
        iata: {
            type: String
        },

        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 700,
        },

        lat: {
            type: Number,
            maxlength: 9
        },

        lon: {
            type: Number,
            maxlength: 9
        },

        location: {
            type: String
        },

        city: {
            type: String,
        },

        state: {
            type: String,
        },

        country: {
            type: String,
        },



        image: {
            type: String //cludinary
        },

        fligths: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Fligth'
        }],

        reviews: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Review'
        }],
    },
    {
        timestamps: true
    }
);

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;