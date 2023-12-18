import "./Box.css";

const Box = ({
  id,
  state,
  handleBoxClick,
}: {
  id: number;
  state: "x" | "o" | null;
  handleBoxClick: (id: number) => void;
}) => {
  return (
    <div className="box" onClick={() => handleBoxClick(id)}>
      {state}
    </div>
  );
};

export default Box;
