import gql from 'graphql-tag';

export const HOME_CATEGORIES = gql`
  query Categories($categoryLevel: Float) {
    categories(categoryLevel: $categoryLevel) {
      code
      name
      children {
        code
        name
      }
    }
  }
`;

export const ALL_CATEGORIES = gql`
  query Categories($categoryLevel: Float) {
    categories(categoryLevel: $categoryLevel) {
      code
      name
      children {
        code
        name
        children {
          code
          name
        }
      }
    }
  }
`;
