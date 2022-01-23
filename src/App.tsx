import React from "react";
import JobListings from "./components/JobListings";
import PostJobForm from "./components/PostJobForm";
import { theme, ThemeProvider } from "./design";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <JobListings />
        <PostJobForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
