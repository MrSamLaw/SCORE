const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    
}

type Auth {
    token:ID!
    user:User
}

type Competitor {
    _id:ID
    firstName: String!
    lastName: String!
    carNo: Int
    class(type:ClassType):String
}

type Qualify {
    qualOne: Int!
    qualTwo: Int!
    competitor: Competitor!
}

enum ClassType {
    Pro
    ProAm
}
type Query {
    users:[User]!
    competitors:[Competitor]!
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
}
`;

module.exports = typeDefs;