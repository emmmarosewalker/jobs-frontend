import React from "react";
import styled from "styled-components";
import { Listing } from "../types/listings";

type Props = {
  listing: Listing;
};

const StyledListingCard = styled.div`
  border: 1px solid black;
`;

function ListingCard({ listing }: Props) {
  return (
    <StyledListingCard>
      <h3>{listing.title}</h3>
      <p>{listing.company}</p>
      <p>{listing.jobType}</p>
      <p>{listing.jobDescription}</p>
      <p>{listing.category}</p>
      <p>{listing.streetAddress}</p>
      <p>{listing.city}</p>
      <p>{listing.country}</p>
      <p>{listing.beginDate}</p>
      <p>{listing.compensation}</p>
    </StyledListingCard>
  );
}

export default ListingCard;
