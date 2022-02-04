import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AppFooter from "./components/Footer";
import Header from "./components/Header";
import JobListings from "./components/JobListings";
import { themeOptions } from "./theme";

function App() {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Box>
        <Header />
        <Box sx={{ mt: 6, mb: 6 }}>
          <JobListings />
        </Box>
        <AppFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
