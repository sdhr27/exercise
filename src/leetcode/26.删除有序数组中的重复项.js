/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 数组长度大于0时，返回值至少包含1个元素， nums[0]保持原状即可，从1开始删除重复元素
  let slow = 1,
    fast = 1;
  while (fast < nums.length) {
    if (nums[fast - 1] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
// @lc code=end
