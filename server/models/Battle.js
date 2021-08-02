const { Schema, model } = require('mongoose');

const battleSchema = new Schema({
    round: {
        type: Schema.Types.ObjectId,
        ref: 'Round'
    },

    competitor: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Competitor'
        }
    ],
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'Competitor',
        default: null
    },
    bracketSide: {
        type: String,
        enum: ['Left', 'Right'],
        required: true,
    },
    bracketLevel: {
        type: Number,
        required: true,
        validate: "divisible by 4"
    },
});

const Battle = model('Battle', battleSchema);

module.exports = Battle;