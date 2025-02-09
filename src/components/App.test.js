import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const counterElement = screen.getByText(/Pas de réseaux sociaux avant/i);
  expect(counterElement).toBeInTheDocument();
});
