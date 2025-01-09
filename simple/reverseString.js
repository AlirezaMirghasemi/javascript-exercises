/**
 * Problem:
 * Write a program that takes a string as input and returns the string reversed.
 *
 * Your task:
 * Implement the function `reverseString` that returns the reversed string of the input.
 *
 * Example:
 * reverseString("hello") should return "olleh".
 * reverseString("world") should return "dlrow".
 */

// Write your solution here
reverseString = (str) => {
  [...reversed] = str;
  reversed = reversed.reverse().toString().split(",").join("");
  //ask chatgpt for make it shorter.
  //  return [...str].reverse().join('');
  return reversed;
};

module.exports = reverseString;
