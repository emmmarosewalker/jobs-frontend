import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <div>
      {listings?.map((listing) => (
        <ListingCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
}

export default JobListings;
