import { fireEvent, render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import BoxList from "../BoxList/BoxList";

it("renders without crashing", () => {
  render(<NewBoxForm />);
});

it("matches the snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
  const { queryByText, getByLabelText, qu } = render(<BoxList />);
  const inputWidth = getByLabelText("Width:");
  const inputHeight = getByLabelText("Height:");
  const inputColor = getByLabelText("Color:");
  const btn = queryByText("Submit");
  let deleteBtn = queryByText("Delete");
  expect(deleteBtn).not.toBeInTheDocument();
  fireEvent.change(inputWidth, { target: { value: "200" } });
  fireEvent.change(inputColor, { target: { value: "#7d3f3f" } });
  fireEvent.change(inputHeight, { target: { value: "200" } });
  fireEvent.click(btn);
  deleteBtn = queryByText("X");
  expect(deleteBtn).toBeInTheDocument();
});
