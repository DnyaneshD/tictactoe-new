import { useState } from "react";
import Box from "../Box/Box";
import "./BoxWrapper.css";
import checkWinner from "../Rules";

const BoxWrapper = ({ nextUser = "x" }: { nextUser?: "x" | "o" }) => {
  const [currentPlayer, setCurrePlayer] = useState<"x" | "o">(nextUser);
  const [winner, setWinner] = useState<"x" | "o" | null>(null);
  const [boardState, setBoardState] = useState(Array(9).fill(null));

  function handleBoxClick(id: number) {
    if (winner || boardState[id]) {
      return;
    }

    const newBoardState = boardState.map((boxState, index) => {
      if (id === index) {
        return currentPlayer;
      }
      return boxState;
    });

    setBoardState(newBoardState);
    setCurrePlayer(currentPlayer === "x" ? "o" : "x");
    const result = checkWinner(newBoardState);
    if (result) {
      setWinner(result);
    }
  }

  function handleRestart() {
    setBoardState(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <>
      <div className="border-wrapper">
        <Box id={0} state={boardState[0]} handleBoxClick={handleBoxClick} />
        <Box id={1} state={boardState[1]} handleBoxClick={handleBoxClick} />
        <Box id={2} state={boardState[2]} handleBoxClick={handleBoxClick} />
        <Box id={3} state={boardState[3]} handleBoxClick={handleBoxClick} />
        <Box id={4} state={boardState[4]} handleBoxClick={handleBoxClick} />
        <Box id={5} state={boardState[5]} handleBoxClick={handleBoxClick} />
        <Box id={6} state={boardState[6]} handleBoxClick={handleBoxClick} />
        <Box id={7} state={boardState[7]} handleBoxClick={handleBoxClick} />
        <Box id={8} state={boardState[8]} handleBoxClick={handleBoxClick} />
      </div>
      <div className="result-wrapper">
        <div>
          Next Player is{" "}
          <span
            data-testid="next-player"
            className="large-font next-move-color"
          >
            {currentPlayer}
          </span>
        </div>
        <div>
          Winner is{" "}
          <span data-testid="winner-player" className="large-font result-color">
            {winner}
          </span>
        </div>
        <button className="reset-button" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </>
  );
};

export default BoxWrapper;
