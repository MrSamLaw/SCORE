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
    # class(type:ClassType):String
}

type Qualifier {
    _id:ID!
    qualOne: Float!
    qualTwo: Float!
    competitor: Competitor!
    round:Round!
}

type Battle {
    _id: ID!
    round: Round
    competitor:[Competitor]
    winner: Competitor
    bracketSide(type:BracketSide):String!
    bracketLevel:Int!
}

type Round {
    _id:ID!
    roundNo: Int!
    season: Season
    qualifiers: [Qualifier]
    battles:[Battle]
}

type Season {
    _id:ID!
    year: String!
    rounds:[Round]
    competitors:[Competitor]
}

# enum ClassType {
#     Pro
#     ProAm
# }

enum BracketSide {
    Left
    Right
}

type Query {
    users:[User]!
    competitors:[Competitor]!
    round(roundId:ID!):Round
    qualifier:Qualifier
}

type Mutation {
    updateQualifier(_id:ID!, qualOne:Int!, qualTwo:Int!):Qualifier
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
}
`;

module.exports = typeDefs;