const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,                      // ESTA NECESARIO? 
    },

    body: {
        type: String,
        // required: true,
    },

    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 0,
    },

    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        comment: { type: String }
        // required: true,
    }]
},
    {
        timestamps: true
    });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;