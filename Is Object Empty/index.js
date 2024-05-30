/**
 * Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 
 */
// solution
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) return true;
  } else {
    if (Object.keys(obj).length === 0) return true;
  }
  return false;
};

// Object.keys and Array.isArray examples
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
const arr = ["a", "b", "c"];
console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
console.log(Array.isArray(object1));
console.log(Array.isArray(arr));

const object2 = {}

// test isEmpty:
console.log("isEmpty test: ", isEmpty(object1))
console.log("isEmpty test: ", isEmpty(object2))