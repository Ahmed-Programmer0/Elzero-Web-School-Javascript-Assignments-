// Using MAX_SAFE_NUMBER To Get 16
console.log(
  (Number.isInteger(Number.MAX_SAFE_INTEGER) +
    Number.isInteger(Number.MAX_SAFE_INTEGER)) **
    (Number.isInteger(Number.MAX_SAFE_INTEGER) +
      Number.isInteger(Number.MAX_SAFE_INTEGER) +
      Number.isInteger(Number.MAX_SAFE_INTEGER) +
      Number.isInteger(Number.MAX_SAFE_INTEGER))
);
