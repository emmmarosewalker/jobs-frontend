import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spacing } from "../design";
import { Listing } from "../types/listings";
import ListingCard from "./ListingCard";

function JobListings() {
  const [listings, setListings] = useState<Listing[]>();

  useEffect(() => {
    axios.get("http://localhost:7000/listings").then((res) => {
      setListings(res.data);
    });
  }, []);

  return (
    <div style={{ margin: "auto", maxWidth: 700 }}>
      <Spacing bottom="small">
        <h2>Current Openings</h2>
      </Spacing>
      {listings?.map((listing) => (
        <Spacing bottom="medium">
          <div>
            <ListingCard listing={listing} key={listing.id} />
          </div>
        </Spacing>
      ))}
    </div>
  );
}

export default JobListings;
