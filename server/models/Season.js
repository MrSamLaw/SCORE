const { Schema, model } = require('mongoose');

const seasonSchema = new Schema({
    year: {
        type: String,
        required: true
    },

    rounds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Round'
        }
    ],

    competitors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Competitor'
        }
    ],

});

const Season = model('Season', seasonSchema);

module.exports = Season;