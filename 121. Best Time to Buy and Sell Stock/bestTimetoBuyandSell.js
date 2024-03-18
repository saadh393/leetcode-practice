/**
 * @param {number[]} prices
 * @return {number}
 */

const test = require("../test");

const maxProfit = (prices) => {
  let buy = 0;
  let sell = 1;
  let maxProfitVal = 0;

  for (let i = 0; i < prices.length; i++) {
    let profit = 0;
    if (prices[buy] < prices[sell]) {
      profit = prices[sell] - prices[buy];
      maxProfitVal = Math.max(maxProfitVal, profit);
      sell++;
    } else {
      buy = sell;
      sell++;
    }
  }
  return maxProfitVal;
};

// console.log(maxProfit([3, 2, 6, 5, 0, 3]));

test(maxProfit([3, 2, 6, 5, 0, 3]), 4);

test(maxProfit([2, 1, 2, 1, 0, 1, 2]), 2);

test(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 4);

test(maxProfit([7, 1, 5, 3, 6, 4]), 5);

test(maxProfit([2, 4, 1]), 2);
