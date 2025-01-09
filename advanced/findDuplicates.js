/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here
let findDuplicates = (arr) => {
  let dup = [];
   dup=arr.filter((item,index)=>arr.indexOf(item)!== index);
  if (dup.length == 0) return [];
  [...dup] = new Set(dup);
  return dup;
  //   let i = 0;
  //   let index = 0;
  //   while (i < arr.length) {
  //     index = i + 1;
  //     while (index < arr.length) {
  //       if (arr[i] == arr[index]) {
  //         dup.push(arr[i]);
  //         break;
  //       }
  //       index++;
  //     }
  //     i++;
  //   }
  //   if (dup.length == 0) {
  //     return [];
  //   } else {
  //     [...dup] = new Set(dup);
  //     return dup;
  //   }
};
console.log(findDuplicates([1, 1, 1, 2, 3]));

module.exports = findDuplicates;
