import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Textarea from ".";
import theme from "../theme";

describe("Textarea component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Textarea placeholder="Message" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Message")).toBeTruthy();
  });

  it("renders with error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Textarea placeholder="Message" hasError />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Message")).toBeTruthy();
  });
});
