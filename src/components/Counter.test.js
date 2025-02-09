import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders Counter component", () => {
  render(<Counter />);
  const messageElement = screen.getByText(/Pas de réseaux sociaux avant/i);
  expect(messageElement).toBeInTheDocument();
});

test("displays time left", () => {
  render(<Counter />);
  const timeElement = screen.getByText(/j h m s/i);
  expect(timeElement).toBeInTheDocument();
});
