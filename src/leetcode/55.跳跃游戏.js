/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0;
  if (nums.length === 1) return true; // 特殊情况特殊考虑，实际上机写不出来也没事
  // 1、i只能在cover范围内移动
  // 2、每移动一次，cover得到新的补充
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i);
    // 如果cover大于等于终点下标
    if (cover >= nums.length - 1) return true;
  }
  return false;
};
// @lc code=end
