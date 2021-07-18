const mongoose = require('mongoose');
const Schema = mongoose.Schema

const companySchema = new Schema({

    name: {
        type: String,
        // required: true,
    },

    logo: { //Cloudinary
        type: String,
        required: true,
    },

    address: {
        street: { type: String, required: true },
        number: { type: String, default: null },
        zipCode: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    },

    documents: [{ //Cloudinary
        type: String,
        required: true,
    }],

    moderator: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Users'
    },

    flights: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Flight'
    }],

    reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Review'
    }],


},

    { timestamps: true }
)

const Company = mongoose.model('Company', companySchema);

module.exports = Company;