import { render } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  it("should render without fail", () => {
    render(<Box id={1} state={"x"} handleBoxClick={(id) => {}} />);
  });
});
