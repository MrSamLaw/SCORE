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
  mutation addRound($roundNo: Int!) {
    addRound(roundNo: $roundNo) {
      _id
      roundNo
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