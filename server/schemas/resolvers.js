const { AuthenticationError } = require('apollo-server-express');
const { User, Competitor, Qualifier, Round, Thought, Season } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        seasons: async () => {
            return await Season.find();
        },
        competitors: async (parent, args) => {
            return Competitor.find();
        },
        rounds: async (parent, args) => {
            return Round.find();
        },
        round: async (parent, { roundId }) => {
            return Round.findOne({ _id: roundId });
            // .populate('qualifiers').populate({
            //     path: 'qualfiers',
            //     populate: 'competitor'
            // });
        },
        qualifier: async (parent, args) => {

            return await Qualifier.find({}).populate('round').populate('competitors');
        },

    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addSeason: async (parent, { year, archived }, context) => {

            // if (context.user) {
            return Season.create({ year, archived });
            // }
            // throw new AuthenticationError('Not logged in');
        },
        addRound: async (parent, { roundNo }, context) => {

            // if (context.user) {
            return Round.create({ roundNo });
            // }
            // throw new AuthenticationError('Not logged in');
        },
    },
};

module.exports = resolvers;