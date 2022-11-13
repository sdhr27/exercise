/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    const wi = coins[i];
    for (let j = wi; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - wi] + 1);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
// @lc code=end
