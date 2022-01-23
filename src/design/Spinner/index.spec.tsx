import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Spinner from ".";

describe("Spinner component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    expect(screen.getByRole("status")).toBeTruthy();
  });
});
