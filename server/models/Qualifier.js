const { Schema, model } = require('mongoose');

const qualifierSchema = new Schema({
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
        ref: 'Competitor',
        // required: true
    },
    round: {
        type: Schema.Types.ObjectId,
        ref: 'Round',
        // required: true
    },
});

const Qualifier = model('Qualifier', qualifierSchema);

module.exports = Qualifier;