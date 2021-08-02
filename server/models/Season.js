const { Schema, model } = require('mongoose');

const seasonSchema = new Schema({
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

});

const Season = model('Season', seasonSchema);

module.exports = Season;