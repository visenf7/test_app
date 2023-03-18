import { useState } from 'react';

const stateValue = (value) => {
  let a = value;
  return a;
};

function useCounterValue({ value }) {
  const arr = useState(() => stateValue(value));
  return arr;
}

export default useCounterValue;
