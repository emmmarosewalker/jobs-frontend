import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Button from ".";
import theme from "../theme";

describe("Box component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Submit</Button>
      </ThemeProvider>
    );
    expect(screen.getByText("Submit")).toBeTruthy();
  });

  it("renders with variant", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Submit</Button>
      </ThemeProvider>
    );
    expect(screen.getByText("Submit")).toBeTruthy();
  });

  it("renders with size variant", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button size="small">Submit</Button>
      </ThemeProvider>
    );
    expect(screen.getByText("Submit")).toBeTruthy();
  });
});
