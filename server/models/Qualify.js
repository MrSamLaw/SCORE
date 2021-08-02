const { Schema, model } = require('mongoose');

const qualifySchema = new Schema({
    qualOne: {
        type: Number,
        required: true,
    },
    qualTwo: {
        type: Number,
        required: true,
    },
    competitor: {
        type: Schema.Types.ObjectId,
        ref: 'Competitor'
    },
    round: {
        type: Schema.Types.ObjectId,
        ref: 'Round'

    },
});

const Qualify = model('Qualify', qualifySchema);

module.exports = Qualify;