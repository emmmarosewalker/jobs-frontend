import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Select from ".";
import theme from "../theme";

describe("Select component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Select>
          <option>L size</option>
        </Select>
      </ThemeProvider>
    );
    expect(screen.getByText("L size")).toBeTruthy();
  });

  it("renders with error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Select hasError>
          <option>L size</option>
        </Select>
      </ThemeProvider>
    );
    expect(screen.getByText("L size")).toBeTruthy();
  });
});
