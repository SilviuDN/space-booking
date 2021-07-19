const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
        iata: {
            type: String                                                  // 3 LETRAS
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

        // en la api city + country
        address: {
            street: { type: String, required: true },
            number: { type: String, default: null },
            zipCode: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
        },

        image: {
            type: String                                                //cludinary
        },

        flights: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Flight'
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