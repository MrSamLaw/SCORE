const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id:ID
    name:String!
}

type Query {
    users:[User]!
}
`;

module.exports = typeDefs;