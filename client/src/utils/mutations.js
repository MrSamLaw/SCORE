import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username:String!, $password:String!) {
        login(username:$username, password:$password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ROUND = gql`
  mutation addRound($roundNo: Int!, $season:ID!) {
    addRound(roundNo: $roundNo, seasonId:$season) {
      _id
      roundNo
      season {
        _id
      }
    }
  }
`;

export const ADD_COMPETITOR = gql`
  mutation addCompetitor($firstName: String!, $lastName:String!, $carNo:Int) {
    addCompetitor(firstName: $firstName, lastName:$lastName,carNo:$carNo) {
      _id
      firstName
      lastName
      carNo
    }
  }
`;

export const ADD_QUALIFIER = gql`
  mutation addQualifier($competitor: ID, $round:ID){
  addQualifier(competitor: $competitor, round:$round){
      _id
    }
    
  }
`;

export const ADD_ROUND_QUALIFIERS = gql`
  mutation AddRoundQualifiers($roundId:ID, $qualifiers: [ID]){
    _id
  }
`;