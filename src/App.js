import { use, useState } from "react";

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
  const [cells, setCells] = useState(Array(9).fill(null));
  return (
    <>
      <Row values={cells.slice(0, 3)} />
      <Row values={cells.slice(3, 6)} />
      <Row values={cells.slice(6, 9)} />
    </>
  );
}
