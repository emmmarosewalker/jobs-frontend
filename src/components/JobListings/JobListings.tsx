import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Listing } from "../../types/listings";
import ListingCard from "../ListingCar/ListingCard";
import PostJobForm from "../PostJobForm/PostJobForm";

function JobListings() {
  const [listings, setListings] = useState<Listing[]>();

  useEffect(() => {
    axios.get("http://localhost:7000/listings").then((res) => {
      setListings(res.data);
    });
  }, []);

  return (
    <Box sx={{ margin: "auto", maxWidth: 700 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Current Openings
      </Typography>
      {listings?.map((listing) => (
        <Box sx={{ mb: 3 }} key={listing.id}>
          <ListingCard listing={listing} key={listing.id} />
        </Box>
      ))}
      <PostJobForm />
    </Box>
  );
}

export default JobListings;
