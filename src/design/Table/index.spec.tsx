import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Table from "./index";

describe("Table component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Kathy C. Do</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </ThemeProvider>
    );
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Kathy C. Do")).toBeTruthy();
  });
});
