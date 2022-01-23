import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Text from ".";
import theme from "../theme";

describe("Text component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Text>Example text</Text>
      </ThemeProvider>
    );
    expect(screen.getByText("Example text")).toBeTruthy();
  });
});
