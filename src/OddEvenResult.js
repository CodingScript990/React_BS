import React from "react";

const OddEvenResult = ({ number }) => {
  return <>{number % 2 === 0 ? "Even" : "Odd"}</>;
};

export default OddEvenResult;
