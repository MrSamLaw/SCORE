const { Schema, model } = require('mongoose');

const competitorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    carNo: {
        type: Number,
        required: true,
    },
    class: {
        type: String,
        enum: ['Pro', 'ProAm'],
        required: true,
    }
});

const Competitor = model('Competitor', competitorSchema);

module.exports = Competitor;