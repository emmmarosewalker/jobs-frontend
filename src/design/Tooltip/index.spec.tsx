import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Tooltip from ".";
import theme from "../theme";

describe("Textarea component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Tooltip.Trigger>
          Hover me
          <Tooltip.Message>Hmmm</Tooltip.Message>
        </Tooltip.Trigger>
      </ThemeProvider>
    );
    expect(screen.getByText("Hover me")).toBeTruthy();
  });
});
