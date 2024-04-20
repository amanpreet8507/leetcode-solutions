var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i.toString());
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 == 0 && arr[j] % 5 == 0) {
      arr[j] = "FizzBuzz";
    } else if (arr[j] % 3 == 0) {
      arr[j] = "Fizz";
    } else if (arr[j] % 5 == 0) {
      arr[j] = "Buzz";
    }
  }
  return arr;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
