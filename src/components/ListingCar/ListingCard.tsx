import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";
import StyledCard from "../../design/Cards";
import { Listing } from "../../types/listings";

type Props = {
  listing: Listing;
};

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
    <Box sx={{ display: "flex", mb: 1 }}>
      <div style={{ width: "40%" }}>
        <Typography variant="subtitle2">
          {getTitleFromListingKey(title)}
        </Typography>
      </div>
      <div style={{ width: "60%" }}>
        <Typography variant="body1">{formatInfoValue(title, value)}</Typography>
      </div>
    </Box>
  );

function ListingCard({ listing }: Props) {
  return (
    <StyledCard>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {listing.title} @ {listing.company}
      </Typography>
      {Object.keys(listing)
        .filter((key) => !omitKeyValues.includes(key))
        .map((key) => (
          <ListingInfoItem
            key={key}
            title={key as DisplayKey}
            value={listing[key as DisplayKey]}
          />
        ))}
    </StyledCard>
  );
}

export default ListingCard;
