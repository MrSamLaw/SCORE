import { gql } from '@apollo/client';

export const QUERY_COMPETITORS = gql`
    query getCompetitors {
        competitors {
            _id
            firstName
            lastName
            carNo
            class
        }
    }
`;