/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here
let numberToWords = (number) => {
  if (number === 0) return "zero";
  let words = {
    0: "",
    1: "one ",
    2: "two ",
    3: "three ",
    4: "four ",
    5: "five ",
    6: "six ",
    7: "seven ",
    8: "eight ",
    9: "nine ",
    10: "ten ",
    11: "eleven ",
    12: "twelve ",
    13: "thirteen ",
    14: "fourteen ",
    15: "fifteen ",
    16: "sixteen ",
    17: "seventeen ",
    18: "eighteen ",
    19: "nineteen ",
    20: "twenty ",
    30: "thirty ",
    40: "forty ",
    50: "fifty ",
    60: "sixty ",
    70: "seventy ",
    80: "eighty ",
    90: "ninety ",
    100: "hundred ",
    1000: "thousand ",
    1000000: "million ",
    1000000000: "billion ",
  };

  let numberStr = number.toString();
  let numberLength = numberStr.length;
  let result = [];
  switch (numberLength) {
    case 1:
      result = oneDigit(number);
      return result.trim();
      break;
    case 2:
      result = twoDigits(number);
      return result.trim();
      break;
    case 3:
      result = threeDigits(number);
      return result.trim();
      break;
    case 4:
      result =
        oneDigit(Math.floor(number / 1000)) +
        words[1000] +
        threeDigits(number % 1000);
      return result.trim();
      break;

    case 5:
      result =
        twoDigits(Math.floor(number / 1000)) +
        words[1000] +
        threeDigits(number % 1000);
      return result.trim();
      break;
    case 6:
      result =
        threeDigits(Math.floor(number / 1000)) +
        words[1000] +
        threeDigits(number % 1000);
      return result.trim();
      break;
    default:
      break;
  }

  console.log(result);
  function oneDigit(num) {
    return words[num];
  }
  function twoDigits(num) {
    let mod = num % 10;
    let division = Math.floor(num / 10);
    if (num < 20 || mod == 0) return oneDigit(num);
    else return oneDigit(division * 10) + oneDigit(mod);
  }
  function threeDigits(num) {
    let mod = num % 100;
    let division = Math.floor(num / 100);
    if (num < 10) return oneDigit(num);
    if (num < 100) return twoDigits(num);
    if (mod == 0) return oneDigit(division) + words[100];
    return oneDigit(division) + words[100] + twoDigits(mod);
  }
};

console.log(numberToWords(123)); // one hundred twenty three
module.exports = numberToWords;
