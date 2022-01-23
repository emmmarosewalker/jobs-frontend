import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Input from ".";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import theme from "../theme";

describe("Input component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Bryan Fury")).toBeTruthy();
  });

  it("renders with tooltip", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          placeholder="Bryan Fury"
          tooltip="Perpetual power generator?... Incredible."
        />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Bryan Fury")).toBeTruthy();
  });

  it("renders with icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" IconComponent={PhoneIcon} />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Bryan Fury")).toBeTruthy();
  });

  it("renders with error", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" hasError />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Bryan Fury")).toBeTruthy();
  });

  it("handles the ref and other props simultaneously", () => {
    const mockRef = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Input placeholder="Bryan Fury" ref={mockRef} hasError />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("Bryan Fury")).toBeTruthy();
  });
});
