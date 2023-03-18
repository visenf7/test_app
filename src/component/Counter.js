import React, { useState } from 'react';

function Counter() {
  const arr = useState(() => {
    let a = 0;
    return a;
  });

  function handleIncrease() {
    arr[1]((prev) => prev + 1);
  }

  function handleDecrease() {
    arr[1]((prev) => prev - 1);
  }

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      <span>{arr[0]}</span>
      <button onClick={handleIncrease}>+</button>
    </>
  );
}

export default Counter;
