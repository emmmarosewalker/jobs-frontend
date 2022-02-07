import { ApolloProvider } from "@apollo/client";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AppFooter from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobListings from "./components/JobListings/JobListings";
import { useApollo } from "./hooks/apollo";
import { themeOptions } from "./theme";

function App() {
  const { client } = useApollo();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <Box>
          <Header />
          <Box sx={{ mt: 6, mb: 6 }}>
            <JobListings />
          </Box>
          <AppFooter />
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
