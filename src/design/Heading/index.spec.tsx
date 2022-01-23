import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Heading from ".";
import theme from "../theme";

describe("Heading component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading>Header</Heading>
      </ThemeProvider>
    );
    expect(screen.getByText("Header")).toBeTruthy();
  });

  it("renders with size variant", () => {
    render(
      <ThemeProvider theme={theme}>
        <Heading as="h2" size="l">
          Variants header
        </Heading>
      </ThemeProvider>
    );
    expect(screen.getByText("Variants header")).toBeTruthy();
  });
});
