import gql from 'graphql-tag';

export const ALL_LOCATIONS = gql`
  query Locations($code: String) {
    locations(code: $code) {
      code
      name
      region
    }
  }
`;
