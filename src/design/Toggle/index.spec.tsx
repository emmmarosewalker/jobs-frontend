import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Toggle from ".";
import theme from "../theme";

describe("Checkbox component", () => {
  it("renders", () => {
    let isToggled = false;
    const toggle = () => {
      isToggled = !isToggled;
    };
    render(
      <ThemeProvider theme={theme}>
        <Toggle id="notifications" checked={isToggled} onChange={toggle}>
          Receive notifications
        </Toggle>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Receive notifications"));
    expect(isToggled).toBeTruthy();
  });
});
