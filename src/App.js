import { useState } from "react";

function Square({ key }) {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("x");
  }
  return (
    <button key={key} className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function Row({ values }) {
  return (
    <div className="board-row">
      {values.map((value) => (
        <Square key={value} />
      ))}
    </div>
  );
}

export default function Board() {
  const cells = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return (
    <>
      {cells.map((cellRow) => {
        return <Row values={cellRow} />;
      })}
    </>
  );
}
