/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */
let isPalindrome = (num) => {
  let stringNum = num.toString();
  [...arrStringNum] = stringNum;
  let reversedNum = [...arrStringNum].reverse().join("");
  return stringNum == reversedNum ? true : false;
};
console.log(isPalindrome(-121)); // true
module.exports = isPalindrome;
