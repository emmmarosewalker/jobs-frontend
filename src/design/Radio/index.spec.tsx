import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Radio from ".";
import theme from "../theme";

describe("Radio component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Radio id="sizeL" name="size" value="l" defaultChecked>
          L size
        </Radio>
      </ThemeProvider>
    );
    expect(screen.getByText("L size")).toBeTruthy();
  });
});
