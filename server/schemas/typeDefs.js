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
    competitor: Competitor
    round:Round
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
    archived: Boolean!
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
    seasons:[Season]!
    competitors:[Competitor]!
    rounds: [Round]!
    round(roundId:ID!):Round
    roundQualifiers(roundId:ID!):[Qualifier]
    qualifiers:[Qualifier]!
    me: User
}

type Mutation {
    updateQualifier(_id:ID!, qualOne:Int!, qualTwo:Int!):Qualifier
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    
    addSeason(year:String!, archived:Boolean):Season
    addQualifier(competitor:ID, round:ID):Qualifier
    addRound(roundNo:Int!, season:ID):Round
    addCompetitor(firstName: String!, lastName:String!,carNo:Int):Competitor
    # addToRound(roundId:ID!, competitor:ID!):Round
    } 
`;

module.exports = typeDefs;