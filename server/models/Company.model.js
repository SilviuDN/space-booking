const mongoose = require('mongoose');
const Schema = mongoose.Schema

const companySchema = new Schema({

    companyName: {
        type: String,
        // required: true,
    },

    logo: { //Cloudinary
        type: String,
        // required: true,
    },

    companyAddress: {
        street: { type: String },
        number: { type: String, default: null },
        zipCode: { type: String },
        city: { type: String },
        country: { type: String }
    },

    document: [{ type: String }]
    ,

    moderator: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },

    reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Review'
    }],
    status: {
        type: Boolean,
        default: "false"
    },


},

    { timestamps: true }
)

const Company = mongoose.model('Company', companySchema);

module.exports = Company;