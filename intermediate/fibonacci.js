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
  if (num <= 0) return [];
  if (num == 1) return [0];
  let fib = [0,1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
};
module.exports = fibonacci;
