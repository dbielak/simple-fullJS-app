import gql from 'graphql-tag';

export const ALL_EVENTS = gql`
  query Events($filters: String, $page: Int, $limit: Int) {
    events(filters: $filters, page: $page, limit: $limit) {
      eventsList {
        title
      }
      total
      pages
      page
    }
  }
`;
