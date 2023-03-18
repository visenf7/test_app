import React from 'react'

function CounterView({count,handleDecrease,handleIncrease}) {
  return (
    <>
    <button onClick={handleDecrease}>-</button>
    <span>{count}</span>
    <button onClick={handleIncrease}>+</button>
  </>
  )
}

export default CounterView