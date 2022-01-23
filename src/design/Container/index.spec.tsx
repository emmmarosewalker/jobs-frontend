import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Container from ".";
import theme from "../theme";

describe("Container component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Container>Contain it</Container>
      </ThemeProvider>
    );
    expect(screen.getByText("Contain it")).toBeTruthy();
  });
});
