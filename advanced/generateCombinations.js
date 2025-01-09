/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
let generateCombinations = (arr) => {
    let combinations=[];
    let repeat=Math.pow(2,arr.length);
    for(let i=1;i<repeat;i++){
       let sub=[];
        for (let j = 0; j < arr.length; j++){
            if (i & (1 << j)) {
                sub.push(arr[j]);
              }
        }
        combinations.push(sub);
    }
    return combinations.sort((a, b) => a.length - b.length);
};
console.log(generateCombinations([1,2,3,4]))
module.exports = generateCombinations;
