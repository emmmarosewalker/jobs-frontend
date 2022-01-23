import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Dropdown from ".";
import theme from "../theme";

describe("Dropdown component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown Trigger={() => <p>Click me</p>}>Hidden content</Dropdown>
      </ThemeProvider>
    );
    expect(screen.getByText("Click me")).toBeTruthy();
    expect(screen.getByText("Hidden content")).toHaveStyle(
      "visibility: hidden"
    );
  });

  it("toggles hidden content", () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown Trigger={() => <p>Click me</p>}>Hidden content</Dropdown>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Click me"));
    expect(screen.getByText("Hidden content")).toHaveStyle(
      "visibility: visible"
    );
  });
});
