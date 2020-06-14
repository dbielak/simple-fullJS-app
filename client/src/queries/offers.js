import gql from 'graphql-tag';

export const OFFERS_LIST = gql`
  query Items($filters: String, $sort: String, $page: Int, $limit: Int) {
    items(filters: $filters, sort: $sort, page: $page, limit: $limit) {
      itemsList {
        itemId
        title
        status
        cityName
        price
        params
        photos
        url
        currency
        negotiate
        regionName
        dateRefresh
        dateAdd
      }
      total
      pages
      page
    }
  }
`;
