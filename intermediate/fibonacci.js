/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
let fibonacci = (num) => {
  let fib = [];
  let last = 0;
  if (num == 0) return [];
  if (num == 1) return [0];
  if (num == 2) return [0,1];
  fib.push(0, 1);
  for (let index = 2; index < num; index++) {
    fib.push(fib[index - 2] + fib[index - 1]);
  }
  return fib;
};
module.exports = fibonacci;
