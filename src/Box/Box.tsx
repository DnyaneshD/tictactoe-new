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
    <div
      data-testid={`box-${id}`}
      className="box"
      onClick={() => handleBoxClick(id)}
    >
      {state ? state : " "}
    </div>
  );
};

export default Box;
