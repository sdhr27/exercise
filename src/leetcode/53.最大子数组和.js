/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    // dp[i] 以第 i个数结尾的「连续子数组的最大和」
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > max) max = dp[i];
  }
  return max;
};
// @lc code=end
