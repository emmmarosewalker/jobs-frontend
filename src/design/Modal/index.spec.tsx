import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Modal, { stopPropagation } from ".";
import theme from "../theme";

describe("Modal component", () => {
  it("stops event propagation", () => {
    const mockEvent = {
      stopPropagation: jest.fn(),
    };
    stopPropagation(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isVisible onHide={() => {}}>
          I'm a modal
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </ThemeProvider>
    );
    expect(screen.getByText("I'm a modal")).toBeTruthy();
  });

  it("should not render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isVisible={false} onHide={() => {}}>
          I'm a modal
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </ThemeProvider>
    );
    expect(screen.queryByText("I'm a modal")).toBeFalsy();
  });
});
