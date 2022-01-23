import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import FormControl from ".";
import theme from "../theme";
import Input from "../Input";

describe("Form Control component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <FormControl>
          <FormControl.Label htmlFor="displayName">
            Display name
          </FormControl.Label>
          <Input id="displayName" placeholder="Bryan Fury" hasError />
          <FormControl.Error>Given name is too short.</FormControl.Error>
        </FormControl>
      </ThemeProvider>
    );
    expect(screen.getByText("Display name")).toBeTruthy();
  });
});
