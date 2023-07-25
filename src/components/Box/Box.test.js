import { render } from "@testing-library/react";
import Box from "./Box";

const box = {
  width: "200",
  height: "200",
  color: "#7d3f3f",
};
it("renders without crash", () => {
  render(<Box box={box} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Box box={box} />);
  expect(asFragment()).toMatchSnapshot();
});
