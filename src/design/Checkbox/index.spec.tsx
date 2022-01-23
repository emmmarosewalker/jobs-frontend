import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Checkbox from ".";
import theme from "../theme";

describe("Checkbox component", () => {
  it("renders", () => {
    let isChecked = false;
    const toggle = () => {
      isChecked = !isChecked;
    };
    render(
      <ThemeProvider theme={theme}>
        <Checkbox id="rememberMe" checked={isChecked} onChange={toggle}>
          Remember me
        </Checkbox>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText("Remember me"));
    expect(isChecked).toBeTruthy();
  });
});
