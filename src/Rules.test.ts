import checkWinner from "./Rules";

describe("Rules of game", () => {
  it("with valid input rule 1 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[0] = "x";
    inputData[1] = "x";
    inputData[2] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 1 should return true for o", () => {
    const inputData = Array(9).fill(null);
    inputData[0] = "o";
    inputData[1] = "o";
    inputData[2] = "o";

    expect(checkWinner(inputData)).toBe("o");
  });

  it("with valid input rule 2 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[3] = "x";
    inputData[4] = "x";
    inputData[5] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 3 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[6] = "x";
    inputData[7] = "x";
    inputData[8] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 4 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[0] = "x";
    inputData[3] = "x";
    inputData[6] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 5 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[1] = "x";
    inputData[4] = "x";
    inputData[7] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 6 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[2] = "x";
    inputData[5] = "x";
    inputData[8] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 7 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[0] = "x";
    inputData[4] = "x";
    inputData[8] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });

  it("with valid input rule 8 should return true for x", () => {
    const inputData = Array(9).fill(null);
    inputData[2] = "x";
    inputData[4] = "x";
    inputData[6] = "x";

    expect(checkWinner(inputData)).toBe("x");
  });
});
