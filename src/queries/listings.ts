import { gql } from "@apollo/client";

export const GET_LISTINGS = gql`
  query getListings {
    listings {
      id
      company
      title
      jobType
      jobDescription
      category
      streetAddress
      city
      country
      beginDate
      compensation
    }
  }
`;

export const ADD_LISTING = gql`
  mutation AddListing($input: ListingInput!) {
    addListing(input: $input) {
      id
    }
  }
`;
