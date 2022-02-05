import { render, screen } from "@testing-library/react";
import FundsScreener from "./FundsScreener";

test("renders learn react link", () => {
  render(<FundsScreener />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
