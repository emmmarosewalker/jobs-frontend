import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { Box, Spacing } from "../design";
import { Listing } from "../types/listings";

type Props = {
  listing: Listing;
};

const StyledListingInfoItem = styled.div`
  display: flex;
`;

const omitKeys = ["id", "title", "company", "streetAddress"] as const;
const omitKeyValues = ["id", "title", "company", "streetAddress"];
type OmitKeys = { [K in typeof omitKeys[number]]: number };
type DisplayKey = keyof Omit<Listing, keyof OmitKeys>;

const getTitleFromListingKey = (key: DisplayKey) =>
  ({
    company: "Company",
    jobType: "Job Type",
    jobDescription: "Job Description",
    category: "Category",
    streetAddress: "Street Address",
    city: "City",
    country: "Country",
    beginDate: "Start Date",
    compensation: "Compensation",
  }[key]);

const formatInfoValue = (key: DisplayKey, value: string) => {
  switch (key) {
    case "beginDate":
      return format(new Date(value), "do MMMM yyyy");
    case "compensation":
      return parseFloat(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    default:
      return value;
  }
};

const ListingInfoItem = ({
  title,
  value,
}: {
  title: DisplayKey;
  value: string | null;
}) =>
  !value ? null : (
    <Spacing bottom="x-small">
      <StyledListingInfoItem>
        <div style={{ width: "40%" }}>
          <h4>{getTitleFromListingKey(title)}</h4>
        </div>
        <div style={{ width: "60%" }}>
          <p>{formatInfoValue(title, value)}</p>
        </div>
      </StyledListingInfoItem>
    </Spacing>
  );

function ListingCard({ listing }: Props) {
  return (
    <Box>
      <Spacing bottom="small">
        <h3>
          {listing.title} @ {listing.company}
        </h3>
      </Spacing>
      {Object.keys(listing)
        .filter((key) => !omitKeyValues.includes(key))
        .map((key) => (
          <ListingInfoItem
            title={key as DisplayKey}
            value={listing[key as DisplayKey]}
          />
        ))}
    </Box>
  );
}

export default ListingCard;
