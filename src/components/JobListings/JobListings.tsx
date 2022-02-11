import { useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { GET_LISTINGS } from "../../queries/listings";
import { Listing } from "../../types/listings";
import QueryResult from "../common/QueryResult";
import ListingCard from "../ListingCar/ListingCard";
import PostJobForm from "../PostJobForm/PostJobForm";

function JobListings() {
  const res = useQuery<{ listings: Listing[] }>(GET_LISTINGS);

  return (
    <Box sx={{ margin: "auto", maxWidth: 700 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Current Openings
      </Typography>
      <QueryResult {...res}>
        {res?.data?.listings?.map((listing) => (
          <Box sx={{ mb: 3 }} key={listing.id}>
            <ListingCard listing={listing} key={listing.id} />
          </Box>
        ))}
      </QueryResult>
      <PostJobForm />
    </Box>
  );
}

export default JobListings;
