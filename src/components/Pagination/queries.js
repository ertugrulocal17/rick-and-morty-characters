import { gql } from '@apollo/client';

export const GET_PAGE = gql`
  query getPage($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
