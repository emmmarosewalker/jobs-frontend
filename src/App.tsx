import React from "react";
import Header from "./components/Header";
import JobListings from "./components/JobListings";
import { Container, theme, ThemeProvider } from "./design";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <div>
          <JobListings />
          {/* <Spacing top="large">
            <div>
              <PostJobForm />
            </div>
          </Spacing> */}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
