import gql from 'graphql-tag';

export const OFFERS = gql`
  query OffersQuery {
    offers(status: "active") {
      _id
      rewrite
      title
      description
      experience
      employType
      companySize
      companyEmail
      companyName
      companyLogo
      companyWebsite
      dateAdded
      salaryFrom
      salaryTo
      currency
      city
      address
      locationLng
      locationLat
      skills
      benefits
      applyType
      technology
      lawInfo
      remote
      customAggriments
      status
    }
  }
`;

export const OFFER_DATA = rewrite => gql`
  query OfferQuery{
    offer(rewrite: "${rewrite}"){
      _id
      rewrite
      title
      description
      experience
      employType
      companySize
      companyEmail
      companyName
      companyLogo
      companyWebsite
      dateAdded
      salaryFrom
      salaryTo
      currency
      city
      address
      locationLng
      locationLat
      skills
      benefits
      applyType
      technology
      lawInfo
      remote
      customAggriments
      status
    }
  }
  `;

export const GET_COMPANY_OFFERS_COUNT = companyEmail => gql`
    query OffersCountQuery {
      offersCount(companyEmail: "${companyEmail}"){
        count
      }
    }
    `;

export const COMPANY_DATA = companyId => gql`
  query companyData {
    companyData(companyId: "${companyId}"){
      companyName
      companyWebsite
      companyLogo
      companySize
      email
      address
      city
      locationLat
      locationLng
      invoiceName
      invoiceAddress
      invoiceZip
      invoiceCountry
      invoiceNip
    }
  } 
  `;

export const ADD_OFFER = gql`
  mutation createOffer(
    $companyName: String!
    $companyWebsite: String
    $companyLogo: String
    $companySocialImage: String
    $companySize: String
    $companyEmail: String!
    $title: String!
    $description: String
    $experience: String!
    $employType: String!
    $salaryFrom: Float!
    $salaryTo: Float!
    $currency: String!
    $technology: String!
    $skills: String
    $benefits: String
    $remote: String!
    $city: String!
    $address: String!
    $locationLat: Float!
    $locationLng: Float!
    $writeData: String!
    $invoiceName: String!
    $invoiceAddress: String!
    $invoiceZip: String!
    $invoiceCountry: String!
    $invoiceNip: String!
    $applyType: String!
    $paymentType: String!
    $lawInfo: String
    $customAggriments: String
  ) {
    createOffer(
      OfferInput: {
        companyName: $companyName
        companyWebsite: $companyWebsite
        companyLogo: $companyLogo
        companySocialImage: $companySocialImage
        companySize: $companySize
        companyEmail: $companyEmail
        title: $title
        description: $description
        experience: $experience
        employType: $employType
        salaryFrom: $salaryFrom
        salaryTo: $salaryTo
        currency: $currency
        technology: $technology
        skills: $skills
        benefits: $benefits
        remote: $remote
        city: $city
        address: $address
        locationLat: $locationLat
        locationLng: $locationLng
        writeData: $writeData
        invoiceName: $invoiceName
        invoiceAddress: $invoiceAddress
        invoiceZip: $invoiceZip
        invoiceCountry: $invoiceCountry
        invoiceNip: $invoiceNip
        applyType: $applyType
        paymentType: $paymentType
        lawInfo: $lawInfo
        customAggriments: $customAggriments
      }
    ) {
      _id
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($password: String!, $companyId: ID!) {
    changePassword(password: $password, companyId: $companyId) {
      companyName
    }
  }
`;

export const GET_COMPANY_OFFERS = companyId => gql`
  query OffersQuery {
    offers(status: "", company: "${companyId}"){
      _id
      rewrite
      title
      city
      salaryFrom
      salaryTo
      currency
      experience
      technology
      address
      status
    }
  }
  `;

export const GET_ADMIN_OFFERS = () => gql`
  query OffersQuery {
    offers(status: "moderate") {
      _id
      rewrite
      title
      city
      salaryFrom
      salaryTo
      currency
      experience
      address
      status
    }
  }
`;

export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      companyId
      token
      tokenExpiration
    }
  }
`;

export const REGISTER = gql`
  mutation CreateCompany($companyName: String!, $email: String!, $password: String!) {
    createCompany(CompanyInput: { companyName: $companyName, email: $email, password: $password }) {
      companyName
      email
    }
  }
`;

export const REMOVE_COMPANY = gql`
  mutation removeCompany($companyId: ID!) {
    removeCompany(companyId: $companyId) {
      companyName
    }
  }
`;

export const UPDATE_OFFER = gql`
  mutation updateOffer(
    $companyId: ID
    $offerId: ID
    $rewrite: String
    $companyName: String!
    $companyWebsite: String
    $companyLogo: String
    $companySocialImage: String
    $companySize: String
    $companyEmail: String!
    $title: String!
    $description: String
    $experience: String!
    $employType: String!
    $salaryFrom: Float!
    $salaryTo: Float!
    $currency: String!
    $technology: String!
    $skills: String
    $benefits: String
    $remote: String!
    $city: String!
    $address: String!
    $locationLat: Float!
    $locationLng: Float!
    $writeData: String!
    $invoiceName: String!
    $invoiceAddress: String!
    $invoiceZip: String!
    $invoiceCountry: String!
    $invoiceNip: String!
    $paymentType: String!
    $lawInfo: String
    $applyType: String
    $customAggriments: String
    $status: String
  ) {
    updateOffer(
      OfferInput: {
        companyId: $companyId
        offerId: $offerId
        rewrite: $rewrite
        companyName: $companyName
        companyWebsite: $companyWebsite
        companyLogo: $companyLogo
        companySocialImage: $companySocialImage
        companySize: $companySize
        companyEmail: $companyEmail
        title: $title
        description: $description
        experience: $experience
        employType: $employType
        salaryFrom: $salaryFrom
        salaryTo: $salaryTo
        currency: $currency
        technology: $technology
        skills: $skills
        benefits: $benefits
        remote: $remote
        city: $city
        address: $address
        locationLat: $locationLat
        locationLng: $locationLng
        writeData: $writeData
        invoiceName: $invoiceName
        invoiceAddress: $invoiceAddress
        invoiceZip: $invoiceZip
        invoiceCountry: $invoiceCountry
        invoiceNip: $invoiceNip
        paymentType: $paymentType
        applyType: $applyType
        lawInfo: $lawInfo
        customAggriments: $customAggriments
        status: $status
      }
    ) {
      _id
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation updateCompany(
    $companyId: ID!
    $companyName: String!
    $companyWebsite: String
    $companyLogo: String
    $companySize: String
    $email: String!
    $city: String!
    $address: String!
    $locationLat: Float!
    $locationLng: Float!
    $invoiceName: String!
    $invoiceAddress: String!
    $invoiceZip: String!
    $invoiceCountry: String!
    $invoiceNip: String!
  ) {
    updateCompany(
      UpdateCompanyInput: {
        companyId: $companyId
        companyName: $companyName
        companyWebsite: $companyWebsite
        companyLogo: $companyLogo
        companySize: $companySize
        email: $email
        city: $city
        address: $address
        locationLat: $locationLat
        locationLng: $locationLng
        invoiceName: $invoiceName
        invoiceAddress: $invoiceAddress
        invoiceZip: $invoiceZip
        invoiceCountry: $invoiceCountry
        invoiceNip: $invoiceNip
      }
    ) {
      _id
    }
  }
`;

export const REMOVE_OFFER = gql`
  mutation removeOffer($companyId: ID!, $offerId: ID!) {
    removeOffer(companyId: $companyId, offerId: $offerId) {
      _id
    }
  }
`;

export const REFRESH_OFFER = gql`
  mutation refreshOffer($companyId: ID!, $offerId: ID!) {
    refreshOffer(companyId: $companyId, offerId: $offerId) {
      _id
    }
  }
`;

export const MODERATE_REMOVE_OFFER = gql`
  mutation moderateRemoveOffer($secret: String!, $offerId: ID!) {
    moderateRemoveOffer(secret: $secret, offerId: $offerId) {
      _id
    }
  }
`;

export const REFRESH_ALL_EXPIRED_OFFERS = gql`
  mutation refreshAllExpiredOffer($secret: String!) {
    refreshAllExpiredOffer(secret: $secret) {
      _id
    }
  }
`;
