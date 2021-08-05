import { gql } from '@apollo/client';

export const QUERY_COMPETITORS = gql`
    query getCompetitors {
        competitors {
            _id
            firstName
            lastName
            carNo
            # class
        }
    }
`;

// export const QUERY_SINGLE_ROUND = gql`
//     query getSingleRound($roundId: ID!) {
//         round(roundId: $roundId) {
//             _id
//             season
//             qualifiers {
//                 _id
//             }
//         }
//     }
// `;

export const QUERY_SINGLE_ROUND = gql`
    query getSingleRound($roundNo: Int!) {
        round(roundNo: $roundNo) {
            _id
            roundNo
            season {
                _id
                year
            }
            qualifiers {
                _id
                competitors {
                    _id
                    firstName
                    lastName
                    carNo
                }
            }
            battles {
                _id
            }
        }
    }
`;

export const QUERY_QUALIFY = gql`
    query getQualify($roundNo:roundNo) {
        qualify(round: $round) {
            _id
            qualOne
            qualTwo
            competitor {
                _id
                firstName
                lastName
                carNo
            }
            round {
                _id
                roundNo
                
            }
        }
    }
`;