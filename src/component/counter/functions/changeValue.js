function handleIncrease(arr) {
  arr[1]((prev) => prev + 1);
}

function handleDecrease(arr) {
  arr[1]((prev) => prev - 1);
}

export { handleDecrease, handleIncrease };
