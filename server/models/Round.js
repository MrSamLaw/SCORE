const { Schema, model } = require('mongoose');

const roundSchema = new Schema({
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season'
    },

    qualifiers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Qualify'
        }
    ],
    battles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Battle'
        }
    ]
});

const Round = model('Round', roundSchema);

module.exports = Round;