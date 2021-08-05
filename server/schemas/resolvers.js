const { AuthenticationError } = require('apollo-server-express');
const { User, Competitor, Qualifier } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        competitors: async (parent, args) => {
            return Competitor.find();
        },
        round: async (parent, { roundNo }) => {
            return Round.findOne({ roundNo: roundNo });
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
    },
};

module.exports = resolvers;