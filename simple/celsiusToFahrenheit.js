/**
 * Problem:
 * Write a function that converts a temperature from Celsius to Fahrenheit.
 *
 * Your task:
 * Implement the function `celsiusToFahrenheit` that converts a given temperature in Celsius to Fahrenheit.
 *
 * Example:
 * celsiusToFahrenheit(0) should return 32.
 * celsiusToFahrenheit(100) should return 212.
 */

// Write your solution here

// function celsiusToFahrenheit(degree) {

//   degree =(Number(degree) * 1.8) + 32;
//   return(degree);
// }

celsiusToFahrenheit=(degree)=>{
    degree =(Number(degree) * 1.8) + 32;
    return(degree);
}
//let degree = prompts("give a celsius degree");
//let degree;
//celsiusToFahrenheit(0);

module.exports = celsiusToFahrenheit;
