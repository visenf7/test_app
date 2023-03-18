import React from 'react';
import { handleDecrease, handleIncrease } from './functions';
import { useCounterValue } from './hooks';
import { CounterView } from './view';

function Counter() {
  const arr = useCounterValue({ value: 0 });

  return (
    <CounterView
      count={arr[0]}
      handleDecrease={() => handleDecrease(arr)}
      handleIncrease={() => handleIncrease(arr)}
    />
  );
}

export default Counter;
