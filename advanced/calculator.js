/**
 * Problem:
 * Write a basic calculator that can perform addition, subtraction, multiplication, and division.
 *
 * Your task:
 * Implement the functions `add`, `subtract`, `multiply`, and `divide` that perform
 * the respective operations based on user input.
 *
 * Example:
 * add(2, 3) should return 5.
 * subtract(5, 2) should return 3.
 * multiply(2, 4) should return 8.
 * divide(10, 2) should return 5.
 */

// Write your solution here
let add = (a, b) => {
    return a + b;
  };
  let subtract = (a, b) => {
    return a - b;
  };
  let multiply = (a, b) => {
    return a * b;
  };
  let divide = (a, b) => {
    if (b === 0) return NaN;
    return a / b;
  };
module.exports = { add, subtract, multiply, divide };
