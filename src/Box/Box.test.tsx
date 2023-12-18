import { fireEvent, render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  it("should render without fail", () => {
    render(<Box id={1} state={"x"} handleBoxClick={(id) => {}} />);
  });
  it("correct id is passed when clicked on the box", () => {
    const mockedFunction = jest.fn();

    render(<Box id={1} state={"x"} handleBoxClick={mockedFunction} />);

    fireEvent.click(screen.getByTestId("box-1"));

    expect(mockedFunction).toBeCalledWith(1);
  });
});
