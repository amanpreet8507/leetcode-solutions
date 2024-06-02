/**
 * Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

 

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.

 */

// Solution:
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
  let chunkArr = [];

  for (let i = 0; i < arr.length; i += size) {
    const subArr = arr.slice(i, i + size);
    chunkArr.push(subArr);

    // or to make it one line:--
    // chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
};

// Test 1
let arr1 = [1, 2, 3, 4, 5];
let size1 = 1;
console.log(chunk(arr1, size1));

// Test 2
let arr2 = [1, 9, 6, 3, 2];
let size2 = 3;
console.log(chunk(arr2, size2));

/* Use of Slice 
 const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const startIndex = 2; // Starting index (inclusive)
 const endIndex = 5;    // Ending index (exclusive)

 const subarray = originalArray.slice(startIndex, endIndex);

 console.log(subarray);  // Output: [3, 4, 5]
*/
