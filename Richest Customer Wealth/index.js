/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let wealthTotalArr = [];
  for (let i = 0; i < accounts.length; i++) {
    let wealthTotal = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealthTotal += accounts[i][j];
    }
    wealthTotalArr.push(wealthTotal);
  }
  console.log("arr", wealthTotalArr);

  let maxWealth = wealthTotalArr[0];
  for (let k = 0; k <= wealthTotalArr.length; k++)
    if (maxWealth < wealthTotalArr[k]) {
      maxWealth = wealthTotalArr[k];
    }

  return maxWealth;
};

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];

console.log(maximumWealth(accounts));
