import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Box from ".";
import theme from "../theme";

describe("Box component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Box>I'm a box</Box>
      </ThemeProvider>
    );
    expect(screen.getByText("I'm a box")).toBeTruthy();
  });
});
