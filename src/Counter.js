import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  // 0에서 출발
  // 1씩 증가
  // 1씩 감소
  // count state
  const [number, setNumber] = useState(initialValue);
  // add handler
  const Add = () => {
    return setNumber(number + 1);
  };
  const Minus = () => {
    return setNumber(number - 1);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={Add}>+</button>
      <button onClick={Minus}>-</button>
      <OddEvenResult number={number} />
    </div>
  );
};
// initailValue props
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
