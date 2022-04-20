import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query getCharacterWithName($characterName: String) {
    characters(filter: { name: $characterName }) {
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
