const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    price: {
        type: Number,
        required: true,
    },

    capacity: {
        type: Number,
        // required: true,
    },

    soldTickets: {
        type: Number,
        default: 0,
        // required: true,
    },

    flightNumber: {
        type: String,
        // required: true,
    },

    airport: {
        type: Schema.Types.ObjectId,
        ref: 'Airport',
        // required: true,
    },

    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
        // required: true,
    },

    date: {
        type: Date,
        // required: true,
    },

    flightCompany: {                        // el owner de la compania es el user del flight
        type: Schema.Types.ObjectId,
        ref: 'Company',
        // required: true,
    },
},

    { timestamps: true }
);

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

