import { ApolloError } from "@apollo/client";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { ReactNode } from "react";

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({
  loading,
  error,
  data,
  children,
}: {
  loading: boolean;
  data: any;
  error?: ApolloError | undefined;
  children: ReactNode;
}) => {
  if (error) {
    return <p>{error.message}</p>;
  }
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  return <>{children}</>;
};

export default QueryResult;
