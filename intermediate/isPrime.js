/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here
let isPrime=(num)=>{
    if(num<=1) return false;
    for (let index = 2; index < num; index++) {
        if((num%index==0)) return false;
    }
    return true;
}
module.exports = isPrime;
