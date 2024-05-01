/**Write a function argumentsLength that returns the count of arguments passed to it.
 

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3. */

var argumentsLength = function(...args) {
    return args.length
};


console.log('test 1', argumentsLength("5")) // one argument
console.log('test 2', argumentsLength({}, null, "3")) // three arguments
console.log('test 3', argumentsLength[({}, null, "3")]) // one array as an argument