import { fireEvent, render, screen } from "@testing-library/react";
import BoxWrapper from "./BoxWrapper";

describe("BoxWrapper component", () => {
  it("should render without fail", () => {
    render(<BoxWrapper />);
  });

  it("correct next play is set", () => {
    render(<BoxWrapper />);
    expect(screen.getByTestId("next-player").textContent).toBe("x");
  });

  it("correct text is set on box click", () => {
    render(<BoxWrapper />);

    fireEvent.click(screen.getByTestId("box-1"));

    expect(screen.getByTestId("box-1").textContent).toBe("x");
  });
});
