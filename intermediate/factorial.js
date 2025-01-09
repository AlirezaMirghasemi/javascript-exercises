/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here
let factorial=(num)=>{
    let factorial=1;
    for (let index = 1; index <= num; ++index) {
        factorial*=index;
    }
    return factorial;
};
//console.log(factorial(0));
module.exports = factorial;
