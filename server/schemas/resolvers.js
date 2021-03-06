const { AuthenticationError } = require('apollo-server-express');
const { User, Competitor, Qualifier, Round, Season } = require('../models');
const { findById } = require('../models/User');
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
            return Round.find().populate('season');
        },
        round: async (parent, { roundId }) => {
            // console.log(roundId);
            return Round.findOne({ _id: roundId })
                .populate('season')
                .populate('qualifiers')
                .populate({
                    path: 'qualfiers',
                    populate: 'competitor'
                });
        },
        qualifiers: async (parent, args) => {
            return await Qualifier.find({}).populate('round').populate('competitors');
        },

        roundQualifiers: async (parent, { roundId }) => {
            return Round.findOne({ _id: roundId })
                .populate('qualifiers').populate({
                    path: 'qualfiers',
                    populate: 'competitor'
                });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw new AuthenticationError('You need to be logged in!');
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
        addRound: async (parent, { roundNo, season }, context) => {
            console.log(season);
            // if (context.user) {
            return await Round.create({ roundNo, season: season });
            // }
            // throw new AuthenticationError('Not logged in');
        },
        addQualifier: async (parent, { competitor, round }) => {
            return await Qualifier.create({ competitor: competitor, round: round });
            // const qualifier = new Qualifier(competitorId, roundId);
            // return qualifier;
        },
        addCompetitor: async (parent, { lastName, firstName, carNo }, context) => {

            // if (context.user) {
            return await Competitor.create({ lastName, firstName, carNo });
            // }
            // throw new AuthenticationError('Not logged in');
        },
        addRoundQualifiers: async (parent, { roundId, qualifiers }, context) => {
            console.log("Round ID");
            console.log(roundId);
            console.log(qualifiers);

            return await Round.findByIdAndUpdate(
                roundId, { $push: { qualifiers: qualifiers } }, { new: true });
        },
        addLapOne: async (parent, { qualifierId, qualOne }, context) => {
            console.log(qualifierId);
            console.log(qualOne);
            return await Qualifier.findOneAndUpdate(
                { _id: qualifierId },
                { $set: { qualOne: qualOne } },
                { "new": true } //returns new document
            );

            // if (!qualScore) {
            //     throw new Error('Unable to find Qualifier');
            // }
            // if (qualOne !== undefined) {
            //     qualScore.qualOne = qualOne;
            //     console.log(qualScore.qualOne)
            // }
            // if (qualTwo !== undefined) {
            //     qualScore.qualTwo = qualTwo;
            //     console.log(qualScore.qualTwo)
            // }
            // console.log(qualScore);
            // return qualScore;
        },
        addLapTwo: async (parent, { qualifierId, qualTwo }, context) => {
            return await Qualifier.findOneAndUpdate(
                { _id: qualifierId },
                { $set: { qualTwo: qualTwo } },
                { "new": true } //returns new document
            );
        },
    },
    Qualifier: {
        competitor: async (parent) => {
            return await Competitor.findOne({ _id: parent.competitor });
        },
        round: async (parent) => {
            return await Round.findOne({ _id: parent.round });
        },
    },
    Round: {
        season: async (parent) => {
            return await Season.findOne({ _id: parent.season });
        }
    }
};

module.exports = resolvers;